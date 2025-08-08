# Simplifying Frontend Development with Alpine.js

🎤 **DevUp 2025 Talk**  
🗓 **Friday, August 8th**  
🕑 **2:00 PM**  
📍 **Room 102**


> _"I hope you find Alpine to be a breath of fresh air. Silence among noise."_  
> — **Caleb Porzio**, creator of Alpine.js

Modern frontend development is powerful, but often overcomplicated. While JavaScript frameworks like React, Vue, and Angular offer robust tooling, they also introduce steep learning curves, large bundle sizes, and tightly coupled application architecture.

In this talk, we explore **Alpine.js**, a lightweight and expressive JavaScript framework that brings the power of reactive interfaces to your HTML; without needing a full build system or component compiler.


## 🎯 What This Talk Covers

- Understanding Alpine’s place in the modern frontend stack
- Live comparison of Alpine.js vs. traditional component-based frameworks
- Exploring the benefits of minimal JavaScript and progressive enhancement
- Building interactive UI without leaving your HTML


## 💻 Demo Overview

This repository contains the code for the live demo shown during the talk.

The demo illustrates how Alpine.js can be used to:

- Dynamically fetch and display product data
- Conditionally render content
- Keep markup clean and maintainable
- Remove boilerplate without sacrificing functionality

### 🔗 [dummyjson.com](https://dummyjson.com/docs/products) is used as the data source.

To avoid network issues during the session, JSON data is also included locally as a fallback.


## 📂 Project Structure

```sh
alpine_demo/
├── index.html # The main HTML file
├── products.json # Local fallback of product data from dummyjson
├── main.ts # Main entrypoint for browser JS, registers Alpine to the window and registers other components
├── components/product.ts # Contains the Alpine Context used for adding reactivity
```


## 🧪 Try It Out

You can view this project live by running `npm i && npm run dev` then navigate to http://localhost:5173/


## 🛠 Technologies Used

- [Alpine.js](https://alpinejs.dev/) via NPM module (also available via CDN)
- [Tailwind CSS](https://tailwindcss.com/) via CDN
- Static HTML + JSON + Vite + TypeScript


## 🙋‍♂️ About the Speaker

**Hunter Trammell**  
Frontend Architect & Developer Advocate  
GitHub: [@huntikins](https://github.com/huntikins)  
LinkedIn: [Hunter Trammell](https://www.linkedin.com/in/huntertrammell/)

Hunter specializes in simplifying frontend workflows and helping teams adopt sustainable, performant solutions. He's passionate about developer experience and exploring what can be accomplished with less JavaScript.


## 📍 Talk Recap & Slides

Slides will be posted on the Whova app after the session. Stay tuned!

