# Restaurant Website (React)

A restaurant website built with React 19 and Material UI. Visitors can browse the menu, add dishes to a cart, place orders, book a table and contact the restaurant. Admins get their own dashboard to manage the menu.

**Live demo:** https://shokri-restaurant.onrender.com

![Restaurant website home page](docs/restaurant-home.avif)

![React](https://img.shields.io/badge/React_19-20232A?logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![MUI](https://img.shields.io/badge/Material_UI-007FFF?logo=mui&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router_7-CA4245?logo=reactrouter&logoColor=white)

---

## Features

- **Landing page** with a video hero, an "Our story" section and an about section
- **Menu**: browse dishes as cards and open a details page for each item
- **Cart**: add and remove items and place an order, with a cart icon that shows the item count
- **Table reservations**: booking form for reserving a table
- **Contact form**: messages are saved for the admin
- **Authentication**: register and log in, with separate user and admin dashboards
- **Admin panel**: manage menu items from the admin dashboard
- **Global state** with React Context (`UserContext`, `CartContext`)
- **Custom MUI theme** and toast notifications

> Data (users, cart, orders, reservations and messages) is stored in the browser's `localStorage`, so the project runs as a pure frontend app with no backend.

## Pages

| Route | Page |
|---|---|
| `/` | Landing page |
| `/menu` | Menu list |
| `/view-details` | Dish details |
| `/cart` | Cart and checkout |
| `/reservations` | Table reservation |
| `/contact` | Contact us |
| `/register`, `/login` | Authentication |
| `/user/dashboard` | User dashboard |
| `/admin/dashboard`, `/admin/manage-menu` | Admin dashboard and menu management |

## Tech stack

React 19 · Vite · Material UI · React Router 7 · React Context · React Hot Toast

## Project structure

```
resturant/src/
├── Component/   # Navbar, Hero, About, Menu, Auth, Admin, User, Footer ...
├── Pages/       # LandingPage, Cart, Contact, Reservations, Admin
├── Context/     # UserContext, CartContext
├── Theme/       # MUI theme
└── assets/      # Images and videos
```

## Getting started

```bash
git clone https://github.com/Shokri2/React26-resturant-project.git
cd React26-resturant-project/resturant
npm install
npm run dev
```

Then open `http://localhost:5173`.

## Author

**Shokri Samara**, Full Stack Developer
[GitHub](https://github.com/Shokri2) · [LinkedIn](https://www.linkedin.com/in/shokri-samara)
