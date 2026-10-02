import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "@fontsource/inter/latin-300.css";
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-600.css";
import "@fontsource/rubik/latin-400.css";
import "@fontsource/rubik/latin-500.css";
import "@fontsource/rubik/latin-600.css";
import "@fontsource/rubik/latin-700.css";

const rootEl = document.getElementById("root");
if (!rootEl) {
  const msg = "Root element (#root) not found in index.html";
  console.error(msg);
  document.body.innerHTML = `<div style="padding:16px;color:#b91c1c;background:#fff0f0;font-family:system-ui;">${msg}</div>`;
  throw new Error(msg);
}

const root = createRoot(rootEl);

function showFatalError(err: unknown) {
  const message = String(err instanceof Error ? `${err.name}: ${err.message}` : err);
  console.error("Fatal render error:", err);
  document.body.innerHTML = `
    <div style="padding:20px;font-family:system-ui;background:#fff0f0;color:#b91c1c;">
      <h2 style="margin:0 0 8px 0">Application Error</h2>
      <pre style="white-space:pre-wrap;margin:0">${message}</pre>
      <p style="margin-top:12px;color:#6b7280">Check your terminal & browser console for stack traces and missing imports.</p>
    </div>
  `;
}

try {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (err) {
  showFatalError(err);
}

window.addEventListener("error", (event) => {
  console.error("Uncaught error event:", event.error || event.message);
  showFatalError(event.error || event.message);
});

window.addEventListener("unhandledrejection", (event) => {
  console.error("Unhandled promise rejection:", event.reason);
  showFatalError(event.reason || "Unhandled promise rejection");
});