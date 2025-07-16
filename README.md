# 🛍️ Responsive Product Card UI – React

A responsive and minimal product card built using **React**. Displays a product with image, name, price, variant dropdown, and an Add to Cart button. Handles out-of-stock logic and provides variant-based image switching.

### 🔗 [Live Demo](https://your-username.github.io/your-repo-name/)

---

## ✅ Features

- 📷 Product image (changes with variant)
- 💬 Product name and price
- 🔽 Variant dropdown
- 🛒 "Add to Cart" button
- ❌ "Out of Stock" disables the dropdown/button
- 📱 Responsive layout with clean UI
- 🧩 CSS only (no Tailwind or UI frameworks)

---

## 🛠️ Tech Stack

- React (v19)
- CSS for styling
- GitHub Pages for deployment

---

## 📁 Project Structure

.
├── public/
│ └── index.html
├── src/
│ ├── assets/
│ │ ├── product.jpg
│ │ ├── product-black.jpg
│ │ ├── product-white.jpg
│ │ └── product-blue.jpg
│ ├── App.js
│ ├── ProductCard.js
│ ├── ProductCard.css
│ └── index.js
├── package.json
└── README.md

---

## 🧪 Developer Notes

### Layout Approach

The layout uses a central card with fixed width and padding. It adapts to screen size with media-friendly CSS. Product variants dynamically change the image via local `assets/`.

### Responsiveness

- Scales well on small devices using `max-width` and `flex`
- Text/image wrap safely and maintain visual balance
- Button disables automatically when `stock === 0`

---

## 🚀 How to Run Locally

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
npm start

🧾 Deployment
The app is deployed using GitHub Pages:

bash
Copy
npm run build
npm run deploy
homepage is configured in package.json for GitHub Pages hosting.
```
