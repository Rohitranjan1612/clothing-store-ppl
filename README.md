# E-commerce - Clothing Store

## Project Overview

This project is a **clothing e-commerce frontend application** built using **Next.js 14 (App Router), TypeScript, Tailwind CSS, Zustand, and React Query**.

The focus of this implementation is **clean architecture, scalability, and maintainability**, rather than pixel-perfect UI.

The application simulates a real-world frontend architecture with a **service layer, state management, URL-synced filters, and asynchronous data fetching**.

---

# Tech Stack

* **Next.js 14** (App Router)
* **TypeScript** (Strict Mode)
* **Tailwind CSS**
* **Zustand** (State management)
* **React Query** (Data fetching)
* **Mock Service Layer**

---

# Live Demo

The project is deployed on **Vercel**.

**Live URL**

[https://clothing-store-ppl.vercel.app/](https://clothing-store-ppl.vercel.app/)

---

# Repository

GitHub Repository

[https://github.com/Rohitranjan1612/clothing-store-ppl](https://github.com/Rohitranjan1612/clothing-store-ppl)

---

# Getting Started

## 1. Clone the repository

```bash
git clone https://github.com/Rohitranjan1612/clothing-store-ppl.git
```

```bash
cd clothing-store-ppl
```

---

## 2. Install dependencies

```bash
npm install
```

or

```bash
yarn install
```

---

## 3. Run the development server

```bash
npm run dev
```

Open the application in your browser:

```
http://localhost:3000
```

---

# Application Features

## 1. Authentication Flow

A simple authentication system is implemented to simulate login behavior.

Features:

* Login page with form validation
* Email format validation
* Password minimum length validation
* Authentication state persisted using **localStorage**
* Protected routes redirect unauthenticated users to `/login`
* Logout clears authentication state

---

# 2. Product Listing Page

The product listing page displays clothing products and supports filtering and search.

### Layout

The page includes:

* Navbar with logo, search input, cart icon, and user dropdown
* Hero banner
* Product grid
* Sidebar filters
* Responsive layout
* Loading states
* Empty state when no products match filters

---

# Filters

Filters are synchronized with **URL query parameters**, allowing them to persist across page refresh and be shareable.

Supported filters:

* Brand (multi-select)
* Price range
* Category
* In stock toggle
* Size filter
* Color filter

Example:

```
/products?brand=Nike&size=M&inStock=true
```

---

# Search

Product search supports:

* Debounced search input
* URL synchronization

Example:

```
/products?search=shirt
```

---

# Product Grid

Products are displayed using **infinite scrolling**.

### Why Infinite Scroll?

Infinite scrolling was chosen because it:

* Reduces navigation friction
* Improves browsing experience
* Matches modern e-commerce browsing patterns

Data loading is implemented using **React Query** with **Intersection Observer**.

---

# 3. Product Details Page

A **dedicated product page** was implemented instead of a modal.

### Why a Product Page?

A dedicated page provides:

* Better SEO
* Shareable URLs
* Simpler state management
* Scalability for larger product catalogs

Example route:

```
/products/12
```

### Features

* Image gallery with thumbnail navigation
* Size selector
* Add to cart with size validation
* Loading state
* Error state

---

# 4. Cart System

Cart functionality is implemented using **Zustand**.

Features:

* Cart persisted in **localStorage**
* Add item to cart
* Remove item from cart
* Update quantity
* Cart drawer UI
* Total price calculation
* Cart item count badge in navbar

### Why Cart Drawer?

A **cart drawer** was chosen instead of a dedicated cart page because it allows users to quickly review and modify their cart without leaving the product browsing experience. This pattern is commonly used in modern e-commerce platforms.

---

# Project Architecture

The project follows a **scalable frontend architecture** separating UI, state, and data access.

```
src
 ├ app
 │   ├ login
 │   ├ products
 │   │   ├ [id]
 │   │   └ page.tsx
 │
 ├ components
 │   ├ cart
 │   ├ filters
 │   ├ layout
 │   └ product
 │
 ├ hooks
 │   ├ useFilters
 │   ├ useInfiniteProducts
 │
 ├ services
 │   └ productService
 │
 ├ store
 │   └ cartStore
 │
 ├ constants
 │
 ├ data
 │   └ mockProducts
 │
 └ types
```

---

# Architecture Principles

* UI components contain **no business logic**
* Data fetching handled through a **service layer**
* Global state handled through **Zustand**
* URL-driven filtering for shareable state

---

# Mock Data and Service Layer

Products are fetched through a **mock service layer** rather than importing data directly into components.

The service simulates:

* asynchronous data fetching
* artificial network delay

Example:

```ts
productService.getProducts()
```

This mimics how a real API would behave.

---

# Performance Considerations

The application includes several performance optimizations:

* Infinite scrolling
* React Query caching
* URL-based filtering
* Efficient rendering of product lists
* Lazy loading product images

---

# Error Handling

The UI gracefully handles:

* Loading states
* API errors
* Missing product data

Users see **user-friendly error messages instead of console errors**.

---

# Tradeoffs and Design Decisions

### Infinite Scroll vs Pagination

Infinite scrolling was chosen because it provides a smoother browsing experience for product catalogs and reduces page navigation.

### Product Page vs Modal

A dedicated product page was chosen instead of a modal because it improves SEO and allows deep linking to individual products.

### Zustand for State Management

Zustand was selected because it provides:

* Simple API
* Minimal boilerplate
* Excellent performance for global state

---

# Assumptions

* No backend was required, so product data is mocked
* Authentication is simulated using `localStorage`
* Checkout flow was out of scope for this assessment

---

# Future Improvements

If more time were available, the following improvements would be implemented:

* Unit and integration tests
* Product sorting options
* Skeleton loaders
* Mobile filter drawer
* Framer Motion animations
* Image zoom on product page
* Checkout flow
* Zustand persist middleware
* Improved accessibility

---

# Author

**Rohit Ranjan**