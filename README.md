# Alarcon CBE Landing Page

This project is a responsive landing page for Alarcon CBE, a service offering
professional virtual support for emotional well-being and personal development.
Key areas of focus include social skills development, assertive communication,
and inclusive education.

## Overview

The landing page is built using React and Tailwind CSS, providing a modern and
smooth user experience.

### Key Sections:

- **Header:** Contains the logo and navigation links (Servicios, Quienes somos,
  Contacto) with smooth scrolling functionality.
- **Hero Section:** A prominent section with a background image, an overlay for
  readability, a main headline, supporting text, and a call-to-action button
  that directs users to WhatsApp.
- **Services Section:** Highlights the different services offered, such as:
  - Educación Especial e Inclusiva
  - Terapia de Pareja y Familiar
  - Acompañamiento Individual
- **(Future Sections):** Placeholder for "Quienes Somos" (About Us) and
  "Contacto" (Contact) sections.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite (assumed, based on typical React project structure)

## Getting Started

To run this project locally:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd alarcon-cbe-lp
   ```

3. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

4. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

This will typically start the application on `http://localhost:5173` or a
similar port.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and
some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react)
  uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc)
  uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the
configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install
[eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x)
and
[eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom)
for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```
