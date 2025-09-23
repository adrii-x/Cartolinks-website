
# Cartolinks Website

A modern, responsive web app built with **Next.js**, **React**, and **Tailwind CSS**.  
It features smooth animations powered by **Framer Motion**, dark mode support, user profile editing (image + name), a seamless infinite carousel, and modular UI components like **Generate**, **Gallery**, **Footer**, and **Rename Dialog Box**.

---
## Live Demo

https://github.com/user-attachments/assets/92712e25-b0d7-4dd5-b344-0d5463aa5e73

## 📑 Table of Contents
- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Component Reference](#component-reference)
  - [Carousel](#carousel)
  - [Profile Rename Modal](#profile-rename-modal)
  - [Generate](#generate)
  - [Gallery](#gallery)
  - [Footer](#footer)
- [Styling & Design Notes](#styling--design-notes)
- [Common Issues & Troubleshooting](#common-issues--troubleshooting)
- [Deployment](#deployment)
- [License](#license)

---

## 🌐 Overview
Cartolinks is a **polished front-end application** built to deliver an engaging and smooth user experience.

### Main Features:
- **Hero Carousel:** Infinite looping with no visible reset or jump.
- **Generate Section:** Expandable "Show all" navigation grid of tools.
- **Gallery:** A space for displaying mini demos or visual previews.
- **Rename Dialog Box:**  
  - Upload and update profile images (circular cropped preview).  
  - Edit display name dynamically.  
- **Dark Mode Support:** Toggle via Tailwind and `isDarkMode` props.
- Built with **modular React components** for easy scalability and maintenance.

---

## ✨ Key Features
- **Responsive Layout:** Optimized for mobile, tablet, and desktop.
- **Infinite Carousel:** Uses cloned slides with an invisible reset trick for seamless looping.
- **Profile Image Upload:** Instant circular preview after upload.
- **Framer Motion Animations:** Smooth animations for modals, dropdowns, and UI transitions.
- **Tailwind-First Styling:** Minimal custom CSS, with arbitrary values for fine-grained control.

---

## 🛠 Tech Stack
- **[Next.js](https://nextjs.org/):** React framework for production-grade apps.
- **[React](https://reactjs.org/):** Component-based UI library.
- **[Tailwind CSS](https://tailwindcss.com/):** Utility-first CSS framework.
- **[Framer Motion](https://www.framer.com/motion/):** Powerful animation library.
- **TypeScript (Recommended):** For static typing and scalability.
- **[lucide-react](https://lucide.dev/):** Optional icon set for UI elements.

---

## 📂 Project Structure
A high-level view of the project directory:

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── Carousel.tsx
│   ├── Generate.tsx
│   ├── Gallery.tsx
│   ├── Main.tsx
│   ├── RenameDialog.tsx
│   └── Footer.tsx
│
public/
│
package.json
tailwind.config.js
next.config.js
README.md
```

---

## 🚀 Getting Started

### **Prerequisites**
- [Node.js](https://nodejs.org/) **v18+** (recommended)
- npm, yarn, or pnpm installed globally.

---

### **Installation**
```bash
git clone https://github.com/adrii-x/Cartolinks-website.git
cd cartolinks-website
npm install
```

> **Windows PowerShell Users:**  
> If you encounter:
> ```
> npm.ps1 cannot be loaded because running scripts is disabled
> ```
> Run PowerShell as **Administrator** and set the execution policy for your user:
> ```powershell
> Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
> ```
> Alternatively, run `npm` from **Git Bash** or **Command Prompt (CMD)**.

---

### **Run Development Server**
```bash
npm run dev
```
Visit **http://localhost:3000** in your browser.

---

### **Build & Start for Production**
```bash
npm run build
npm run start
```

---

## 🧩 Component Reference

### **Carousel**
- Displays hero images in an infinite loop.
- Seamless looping using cloned slides and invisible reset logic.

---

### **Profile Rename Modal**
- Allows users to:
  - Update display name.
  - Upload/change profile image with circular preview.
- Uses **Framer Motion** for smooth animations.

---

### **Generate**
- Expandable grid of tools with a "Show All" toggle.
- Responsive layout for different screen sizes.

---

### **Gallery**
- Displays mini demos or projects in a clean grid.

---

### **Footer**
- Contains app-related links and information.

---

## 🎨 Styling & Design Notes
- Tailwind CSS is the **primary styling tool**, with minimal custom CSS.
- Arbitrary values (`[value]`) are used for precise styling where needed.
- Built-in support for **light/dark mode** via Tailwind utilities and conditional classes.

---


---

## 🐞 Common Issues & Troubleshooting
| Issue                                         | Solution |
|----------------------------------------------|----------|
| **npm.ps1 cannot be loaded** error in PowerShell | Run PowerShell as Administrator and execute:<br>`Set-ExecutionPolicy RemoteSigned -Scope CurrentUser` |
| Carousel jump after looping | Ensure cloned slides are properly rendered and the invisible reset logic is intact. |
| Tailwind styles not applying | Restart dev server and check `tailwind.config.js` for correct paths. |

---

## 🌍 Deployment
The easiest way to deploy this project is with **[Vercel](https://vercel.com/)**:
1. Push the code to GitHub.
2. Connect your GitHub repo to Vercel.
3. Deploy automatically.

**Link:**  
[https://cartolinks-website-tau.vercel.app/](https://cartolinks-website-tau.vercel.app/)

---

## 📜 License
This project is licensed under the **MIT License**.  
Feel free to use, modify, and distribute with attribution.

---

> **Author:** Adrian Okonkwo  
> Linkedin: [https://www.linkedin.com/in/adrian-okonkwo](https://www.linkedin.com/in/adrian-okonkwo)
