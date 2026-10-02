import { describe, it, expect } from "vitest";
import type { ReactElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { JSDOM } from "jsdom";
import { existsSync } from "node:fs";
import App from "../src/App";
import { Privacy } from "../src/components/Privacy";

// The page is server-rendered to static HTML and parsed with jsdom. This
// keeps the suite fast and dependency-light: no browser, no network, no
// Formspree calls.
function render(node: ReactElement): Document {
	const html = renderToStaticMarkup(node);
	return new JSDOM(`<!doctype html><html><body>${html}</body></html>`).window
		.document;
}

describe("landing page", () => {
	const doc = render(<App />);

	it("renders content", () => {
		expect(doc.querySelector("#hero")).toBeTruthy();
		expect((doc.body.textContent ?? "").trim().length).toBeGreaterThan(200);
	});

	it("has one h1 and no skipped heading levels", () => {
		const levels = Array.from(
			doc.querySelectorAll("h1,h2,h3,h4,h5,h6"),
		).map((h) => Number(h.tagName[1]));
		expect(levels.filter((l) => l === 1)).toHaveLength(1);
		expect(levels[0]).toBe(1);
		levels.forEach((level, i) => {
			if (i > 0) expect(level - levels[i - 1]).toBeLessThanOrEqual(1);
		});
	});

	it("gives every image an alt and every referenced image file exists", () => {
		const imgs = Array.from(doc.querySelectorAll("img"));
		expect(imgs.length).toBeGreaterThan(0);

		const srcs = new Set<string>();
		imgs.forEach((img) => {
			expect(img.hasAttribute("alt"), img.getAttribute("src") ?? "?").toBe(
				true,
			);
			const src = img.getAttribute("src");
			if (src) srcs.add(src);
		});
		Array.from(doc.querySelectorAll("source[srcset]")).forEach((s) => {
			const srcset = s.getAttribute("srcset");
			if (srcset) srcs.add(srcset);
		});

		srcs.forEach((src) => {
			if (!src.startsWith("/")) return;
			expect(existsSync(`public${src}`), `missing public${src}`).toBe(true);
		});
	});

	it("keeps the section anchors the navigation depends on", () => {
		["hero", "about", "topics", "pricing", "book", "quote-form"].forEach(
			(id) => {
				expect(doc.getElementById(id), `#${id}`).toBeTruthy();
			},
		);
	});

	it("gives form controls and buttons accessible names", () => {
		const controls = Array.from(
			doc.querySelectorAll<HTMLElement>("input,textarea,select"),
		).filter(
			(c) =>
				(c as HTMLInputElement).type !== "hidden" &&
				c.getAttribute("aria-hidden") !== "true",
		);
		controls.forEach((c) => {
			const named =
				c.getAttribute("aria-label") ||
				c.getAttribute("aria-labelledby") ||
				c.closest("label") ||
				(c.id && doc.querySelector(`label[for="${c.id}"]`));
			expect(Boolean(named), `control ${c.outerHTML.slice(0, 70)}`).toBe(true);
		});

		Array.from(doc.querySelectorAll("button")).forEach((b) => {
			const named =
				(b.textContent ?? "").trim().length > 0 ||
				b.getAttribute("aria-label") ||
				(b.id && doc.querySelector(`label[for="${b.id}"]`));
			expect(Boolean(named), `button ${b.outerHTML.slice(0, 70)}`).toBe(true);
		});
	});

	it("makes external links safe", () => {
		Array.from(doc.querySelectorAll('a[target="_blank"]')).forEach((a) => {
			expect(
				a.getAttribute("rel") ?? "",
				a.getAttribute("href") ?? "?",
			).toMatch(/noopener|noreferrer/);
		});
		Array.from(doc.querySelectorAll('a[href^="http://"]')).forEach((a) => {
			throw new Error(`insecure external link: ${a.getAttribute("href")}`);
		});
	});

	it("enforces the quote form requirements and the 2028 gating", () => {
		const form = doc.querySelector("form");
		expect(form).toBeTruthy();
		expect(form?.querySelectorAll("[required]").length).toBeGreaterThanOrEqual(
			4,
		);
		expect(form?.querySelector('input[type="email"]')).toBeTruthy();

		const ack = form?.querySelector<HTMLInputElement>("#acknowledged");
		expect(ack?.getAttribute("type")).toBe("checkbox");
		expect(ack?.hasAttribute("required")).toBe(true);

		const min =
			form
				?.querySelector<HTMLInputElement>('input[type="date"]')
				?.getAttribute("min") ?? "";
		expect(min).toMatch(/^\d{4}-01-01$/);
		expect(Number(min.slice(0, 4))).toBeGreaterThanOrEqual(
			new Date().getFullYear(),
		);

		expect((form as HTMLFormElement).checkValidity()).toBe(false);
	});
});

describe("privacy page", () => {
	const doc = render(<Privacy onBack={() => undefined} />);

	it("renders the policy inside a main landmark with contact details", () => {
		expect(doc.querySelector("main")).toBeTruthy();
		expect(doc.querySelector("h1")?.textContent).toMatch(/Privatlivspolitik/);
		expect(doc.body.textContent).toMatch(/dortelinde@gmail\.com/);
	});
});
