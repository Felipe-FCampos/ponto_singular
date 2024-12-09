<<<<<<< HEAD
# ponto_singular
Bem-vindo ao meu portfólio! Este repositório reúne projetos e ideias que representam minha jornada no desenvolvimento de software, destacando habilidades técnicas e criatividade. Cada projeto aqui é uma peça única, como um ponto singular no universo.

## 🌀 Sobre o Repositório
O ponto_singular reflete meu estilo e abordagem no desenvolvimento. Você encontrará:

Interfaces modernas e responsivas.
Soluções backend robustas.
Protótipos inovadores e experimentos criativos.
Explore e descubra como utilizo tecnologia para resolver problemas e criar experiências únicas.

## 🚀 Tecnologias Utilizadas
Este portfólio foi construído utilizando:

Frontend: React, Angular, TypeScript\n
Backend: C, C#, Python
=======
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
>>>>>>> 8ed1861 (initial commit)
