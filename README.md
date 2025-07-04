# Shopp App – Documentation & Showcase

> *A learning project for a simple online store front.*

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## Table of Contents

1. [Introduction](#1-introduction)
2. [Tech Stack](#2-tech-stack)
3. [Installation](#3-installation)
4. [Main Components](#4-main-components)
5. [License](#5-license)

# 1. Introduction

**Shopp App** is a small React application that demonstrates a basic shopping interface. It fetches product data from [dummyjson.com](https://dummyjson.com/) and lets you browse items, view details and manage a cart. This code is purely for education and portfolio purposes and is not intended for production use.

# 2. Tech Stack

| Layer       | Technology          | Key Libraries |
| ----------- | ------------------- | ------------- |
| Front‑end   | React 18 (CRA)      | react-icons, country-flag-icons |
| Styling     | CSS Modules         | — |
| Testing     | Jest + React Testing Library | — |

# 3. Installation

Clone the repository and install dependencies with **npm**:

```bash
npm install
npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000).

Run the test suite with:

```bash
npm test -- --watchAll=false
```

# 4. Main Components

## Navbar
* Search bar with quick category links
* Currency selector (USD, PLN, GBP) with on‑the‑fly price conversion
* Cart icon showing the number of added items

## Products & Search
* Home page lists example items from the API
* Category pages and search engine allow filtering
* Product cards show rating, discount and stock

## Single Item View
* Displays full product details
* Button to add the item to the cart

## Cart
* Items can be activated/deactivated and removed
* Order summary calculates total price and savings

# 5. License

This project is released under the [MIT License](LICENSE).