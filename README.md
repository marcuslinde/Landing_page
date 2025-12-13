# DorteLinde.dk 🚀
### Professional Landing Page for an Inclusion Specialist

![Status](https://img.shields.io/badge/Status-Dev_Complete_|_Awaiting_Launch-yellow) ![Stack](https://img.shields.io/badge/Stack-React_|_TypeScript_|_Tailwind-blue) ![DevOps](https://img.shields.io/badge/DevOps-Docker_Review_Pipeline-2496ED)

**DorteLinde.dk** is a responsive, single-page landing page built for a consultant specializing in the inclusion of children with special needs.

This project represents the full lifecycle of a web product: from interpreting a **Figma design**, through **React/TypeScript implementation**, to a custom **Docker-based review workflow**.

> **Client:** Dorte Linde (Consultant)
> **Role:** Full Stack Development & DevOps
> **Current Status:** Development complete. Staged and ready for production launch (pending client schedule).

---

## 🎨 From Concept to Code

The core challenge was not just building the site, but refactoring a rough Figma draft into a cohesive, user-friendly experience.

### 1. Original Figma Draft
*The initial auto-generated layout served as the visual direction but lacked logical flow.*
<img width="100%" alt="Figma Draft" src="https://github.com/user-attachments/assets/e532ae0d-b78a-48a5-8ebf-6f7967aa321d" />

### 2. Implementation (React)
*The final version features improved section logic, responsive behavior, and optimized assets.*
<img width="100%" alt="Final Version 1" src="https://github.com/user-attachments/assets/99e822e0-fdb3-4b67-ad60-e419b0eb5e07" />
<img width="100%" alt="Final Version 2" src="https://github.com/user-attachments/assets/ab3b4586-5956-45a0-98f4-caebf9ee8d90" />

---

## 🎯 Learning Goals & Motivation

I deliberately chose a modern tech stack to bridge the gap between design and engineering. My key objectives were:

1.  **Modern Frontend Workflow:** Gaining hands-on experience with **Vite, React, and TypeScript** to build a strictly typed, performant application.
2.  **Refactoring as a Skill:** Instead of designing from scratch, I practiced the critical skill of *interpreting* a design, identifying UX flaws (e.g., separating "Topics" from "Pricing"), and refactoring the code (refining `Navbar.tsx` and `Hero.tsx`) for maintainability.
3.  **DevOps for Clients:** Solving a real-world communication problem using **Docker** (see below).

---

## 🐳 The Docker Review Pipeline

One of the unique challenges was enabling my non-technical client to review "work-in-progress" changes without hosting them on a public server or asking her to install Node.js.

**The Solution:**
I containerized the Vite development environment to create a portable review pipeline.

1.  **Dockerfile:** Created a lightweight image based on `node:18-alpine` that exposes port `5523`.
2.  **Distribution:** Pushed the image to Docker Hub (`marcuslinde/dortelinde-demo`).
3.  **Client Review:** The client could run a single command:
    ```bash
    docker run -p 5523:5523 marcuslinde/dortelinde-demo
    ```
**Result:** This allowed the client to view the site at `http://localhost:5523` immediately, drastically shortening the feedback loop.

---

## 🛠 Tech Stack

* **Framework:** React 18 (via Vite)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **UI Library:** shadcn/ui
* **Forms:** Formspree (Serverless form handling)
* **DevOps:** Docker (Review Pipeline)
* **Hosting:** Apache/cPanel (Nordicway) - *Configuration Ready*

---

## 🧩 Technical Highlights & Problem Solving

During development, I encountered and resolved several specific technical hurdles:

* **Tailwind Opacity Bug:** Discovered an issue where opacity modifiers (e.g., `bg-primary/15`) failed because the underlying CSS variables were defined as HEX codes.
    * *Fix:* Utilized Tailwind arbitrary values (`bg-[#117A8B]/15`) as a pragmatic solution to maintain velocity without rewriting the global theme configuration.
* **TypeScript Build Pipeline:** Debugged strict type errors regarding unused variables and missing component definitions in the `shadcn` library to ensure a clean `npm run build` process.
* **Asset Management:** Replaced hardcoded design URLs with a structured local `public` asset directory for better caching and reliability.

---

## 🚀 How to Run Locally

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/marcuslinde/dortelinde.git](https://github.com/marcuslinde/dortelinde.git)
    ```
2.  **Install Dependencies**
    ```bash
    npm install
    ```
3.  **Run Development Server**
    ```bash
    npm run dev
    ```
