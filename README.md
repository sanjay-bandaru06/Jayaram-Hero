# 🏍️ Jayaram Automobile

> Authorised Hero MotoCorp dealer in Ramanayyapeta, AP. Browse & buy the latest bikes and scooters online. Your trusted local showroom, now at your fingertips.

🌐 **Live Demo:** [https://jayaram-hero.vercel.app/](https://jayaram-hero.vercel.app/)

---

## 📸 Overview

**Jayaram Automobile** is a modern vehicle showroom web app built for an authorised Hero MotoCorp dealer located in Ramanayyapeta, Andhra Pradesh. Users can explore the full range of Hero bikes and scooters, search by vehicle name, and get redirected to Amazon to purchase.

---

## ✨ Features

- 🏠 **Home Page** — Hero banner with logo, address, stats strip, and vehicle previews
- 🏍️ **Bikes Page** — Full listing of Hero MotoCorp bikes with name, price & buy link
- 🛵 **Scooters Page** — Full listing of Hero MotoCorp scooters with name, price & buy link
- 🔍 **Search** — Case-sensitive search with special character support and match highlighting
- 📱 **Responsive** — Fully mobile and desktop friendly
- 🛒 **Buy on Amazon** — Each vehicle card links directly to Amazon

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| Vite | Build tool |
| React Router v6 | Client-side routing |
| Plain CSS | Styling |
| Google Fonts | Bebas Neue + Barlow typography |

---

## 📁 Project Structure

```
jayaram-automobile/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── assets/
    │   └── hero-logo.jpg
    ├── components/
    │   ├── Navbar.jsx / .css
    │   ├── Footer.jsx / .css
    │   ├── VehicleCard.jsx / .css
    │   ├── VehicleGrid.jsx / .css
    │   ├── SearchBar.jsx / .css
    ├── data/
    │   └── vehicles.js
    └── pages/
        ├── Home.jsx / .css
        ├── Bikes.jsx
        ├── Scooters.jsx
        ├── SearchPage.jsx / .css
        └── VehiclePage.css
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- npm v9+

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/jayaram-automobile.git

# Navigate into the project
cd jayaram-automobile

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 🔍 Search Feature

- **Case-sensitive** — `splendor` and `Splendor` return different results
- **Special characters supported** — Characters like `+`, `.`, `(`, `)`, `*` are treated literally
- **Match highlighting** — The matched part of the vehicle name is highlighted in red
- **Grouped results** — Results are split into Bikes and Scooters sections

---

## 🎨 Design

| Element | Value |
|---|---|
| Primary Color | `#E8000D` (Hero Red) |
| Background | White / Light Grey |
| Text | Black |
| Display Font | Bebas Neue |
| Body Font | Barlow / Barlow Condensed |

---

## 🚗 Vehicles Included

**Bikes** — Splendor Plus, HF Deluxe, Passion Pro, Glamour, Xtreme 160R, Xpulse 200, Mavrick 440, Super Splendor

**Scooters** — Destini 125, Pleasure Plus, Maestro Edge 125, Xoom 110, Optima (Electric), Vida V1 Plus

---

## 📦 Deployment

This project is deployed on **Vercel**.

To deploy your own:

```bash
npm install -g vercel
vercel
```

---

## 📍 Showroom Details

**Jayaram Automobile**
Ramanayyapeta, Andhra Pradesh
Authorised Hero MotoCorp Dealer

---

## 📄 License

This project is for personal/business use by Jayaram Automobile. All Hero MotoCorp vehicle names, logos, and trademarks belong to Hero MotoCorp Ltd.
