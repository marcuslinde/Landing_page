import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { JSDOM } from "jsdom";

const doc = new JSDOM(readFileSync("index.html", "utf8")).window.document;

describe("index.html head", () => {
	it("declares Danish and a descriptive, branded title", () => {
		expect(doc.documentElement.getAttribute("lang")).toBe("da");
		const title = doc.querySelector("title")?.textContent?.trim() ?? "";
		expect(title.length).toBeGreaterThan(10);
		expect(title).toMatch(/Dorte Linde/);
	});

	it("has the core SEO tags", () => {
		expect(
			doc.querySelector('meta[name="description"]')?.getAttribute("content"),
		).toBeTruthy();
		expect(
			doc.querySelector('meta[name="viewport"]')?.getAttribute("content"),
		).toContain("width=device-width");
		expect(
			doc.querySelector('link[rel="canonical"]')?.getAttribute("href"),
		).toBe("https://dortelinde.dk/");
		expect(doc.querySelector('meta[name="theme-color"]')).toBeTruthy();
	});

	it("has the full Open Graph set", () => {
		for (const prop of [
			"og:type",
			"og:title",
			"og:description",
			"og:url",
			"og:image",
		]) {
			expect(
				doc.querySelector(`meta[property="${prop}"]`)?.getAttribute("content"),
				prop,
			).toBeTruthy();
		}
		expect(
			doc.querySelector('meta[property="og:image"]')?.getAttribute("content"),
		).toMatch(/^https:\/\/dortelinde\.dk\/images\/.+\.(jpe?g|png|webp)$/);
	});

	it("declares a favicon and apple-touch-icon", () => {
		expect(doc.querySelector('link[rel~="icon"]')).toBeTruthy();
		expect(doc.querySelector('link[rel="apple-touch-icon"]')).toBeTruthy();
	});

	it("has parseable JSON-LD structured data", () => {
		const el = doc.querySelector('script[type="application/ld+json"]');
		expect(el).toBeTruthy();
		const data = JSON.parse(el?.textContent ?? "{}") as Record<string, unknown>;
		expect(data["@type"]).toBeTruthy();
		expect(data.name).toBeTruthy();
	});
});
