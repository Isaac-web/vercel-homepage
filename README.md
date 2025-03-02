# Vercel Homepage Clone

![image](https://github.com/user-attachments/assets/b1e5dd78-f3fa-4599-b207-e87601b8e86c)


[Link to deployed website](https://vercel-homepage-challenge.vercel.app)

<br>

![vercel-homepage](https://github.com/user-attachments/assets/36235bac-ba46-4a76-8c9d-68e6c49eb8c3)

This project is a **replication of the Vercel.com homepage**, built to closely match the **design, layout, and interactive elements** of the live site. The goal was to **recreate the experience** as accurately as possible using modern web technologies.

## 🚀 **Project Overview**

- **Fully responsive layout** that adapts to different screen sizes
- **Smooth animations and transitions** to match the original site’s feel
- **Interactive elements**, including hover effects and dynamic components

## 🎨 **Design & Assets**

Since the original assets (e.g., images, icons, and typography) are proprietary, **synthetic data and custom visuals** were used where necessary while maintaining the overall aesthetics of Vercel’s homepage.

## 🛠 **Technologies Used**

- **React & Vite.js** for the frontend
- **Framer Motion** for animations
- **Tailwind CSS** for styling
- **TypeScript** for type safety

## 🛠 **How to Run the Project**

### **Prerequisites**

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS recommended)
- [Yarn](https://yarnpkg.com/) or npm




### **Installation & Setup**

1. **Clone the repository**

   ```sh
   git clone https://github.com/your-username/vercel-homepage-clone.git
   cd vercel-homepage-clone

   ```

2. **Install dependencies**

```sh
npm install
#or
yarn install
```

3. **Run the development server**

```sh
npm run dev
#or
yarn dev

```

4. **Open in browser**

```sh
http://localhost:5173
```

## 📌 **Disclaimer**

This project is **not affiliated with or endorsed by Vercel**. It was built for **educational and practice purposes only** to explore modern web development techniques.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

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
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```
