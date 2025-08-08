# cn-lite

![npm](https://img.shields.io/npm/v/cn-lite)
![Downloads](https://img.shields.io/npm/dt/cn-lite)
![License](https://img.shields.io/npm/l/cn-lite)

A tiny utility to conditionally combine CSS class names.  
Lightweight, TypeScript-ready, and perfect for React, Vue, or vanilla JavaScript.

---

## ✨ Features

- Zero dependencies
- Works with **strings**, **arrays**, and **objects**
- Recursively flattens nested class lists
- Perfect for **Tailwind CSS** and **React**
- ESM + TypeScript support

---

## 🚀 Installation

```bash
npm install cn-lite
```

or

```bash
yarn add cn-lite
```

---

## 📦 Usage

```ts
import cn from "cn-lite";

const buttonClass = cn(
  "btn",
  isPrimary && "btn-primary",
  isDisabled ? "btn-disabled" : "btn-active",
  extraClassName
);

console.log(buttonClass);
// "btn btn-primary btn-active custom-class"
```

### ✅ Works with:

- Strings
- Conditional booleans
- Arrays
- Nested arrays
- Falsy values are automatically skipped

---

## 📚 Example

```ts
const classes = cn(
  "text-lg",
  false && "hidden",
  ["hover:underline", null, ["bg-blue-500"]],
  isActive && "font-bold"
);

console.log(classes);
// "text-lg hover:underline bg-blue-500 font-bold"
```

---

## 🔹 Why `cn-lite`?

- **Zero dependencies**
- **Tree-shakeable** — only what you use gets included
- **TypeScript support** out of the box
- **Smaller footprint** compared to popular `classnames`

---

## 🆚 Why Not Just Use classnames?

- classnames is great, but this is:
- Simpler — less than 30 lines of code
- Fully transparent — you can read & understand it instantly
- No extra features you don't need
- Tiny footprint for small/medium projects

## 📄 License

MIT © [Aravind Prabash](https://github.com/AravindPrabash)
