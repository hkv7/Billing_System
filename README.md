# Billing System — Client (React + Vite)

[![React](https://img.shields.io/badge/react-19.1.1-61DAFB?logo=react&logoColor=white)](https://reactjs.org) [![Vite](https://img.shields.io/badge/vite-7.1.7-646cff?logo=vite&logoColor=white)](https://vitejs.dev) [![Node](https://img.shields.io/badge/node-%3E%3D18-brightgreen?logo=node.js&logoColor=white)](https://nodejs.org)

:sparkles: This repository contains the frontend client for a simple billing / point-of-sale web application built with React and Vite. The client consumes a REST API (expected at http://localhost:8080) and provides UI for browsing items, managing a shopping cart, creating orders and handling payments. It also contains admin pages for managing categories, items and users.

## Key Features
- Browse items and categories
- Add items to a cart, update quantities, remove items
- Create orders and view order history
- Razorpay integration (create/verify payments via backend)
- Role-based routes (admin-only pages for managing users, categories, items)
- JWT-based authentication: token and role are stored in `localStorage`

## Architecture / Notable files
- Frontend: React + Vite
- HTTP client: `axios` (see `src/Service/*` for API calls)
- App-wide state: `src/context/AppContext.jsx` (cart, items, categories, auth)
- Routes and protection: `src/App.jsx` (protected routes, allowedRoles)

Important service files:
- `src/Service/AuthService.js` — login
- `src/Service/CategoryService.js` — fetch/add/delete categories
- `src/Service/ItemService.js` — fetch/add/delete items
- `src/Service/OrderService.js` — create/delete orders, latest orders
- `src/Service/PaymentService.js` — create Razorpay order, verify payment
- `src/Service/UserService.js` — admin user management

## Prerequisites
- Node.js (18+ advised) and npm installed
- Backend API running (default expected at `http://localhost:8080`)

## Local setup
1. Install dependencies

```bash
npm install
```

2. Run development server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

4. Preview production build

```bash
npm run preview
```

## Environment / Configuration
- The frontend currently calls backend endpoints at `http://localhost:8080/api/v1.0/...` (see `src/Service/*`). If your backend is hosted elsewhere, update the service files or introduce a `VITE_API_URL` environment variable and use it in the services.
- Authentication: on successful login the app expects a JWT `token` and `role` stored in `localStorage` (the app uses these to authorize requests and route access).

## What is (and is not) in this repository
- Included: source code under `src/`, `public/`, `package.json`, config files and README
- Excluded (via `.gitignore`): `node_modules/`, build output (`dist/`), editor caches, and local env files such as `.env` or `*.local`

## Notes & Next steps
- Consider adding a `.env` handling pattern (e.g., `VITE_API_URL`) and updating `src/Service` to read from it.
- Add more README sections (API contract, deployment, contribution guidelines) when the backend contract is finalized.

## License
- Add a license if you want others to reuse this project (e.g., MIT). Currently none is specified.

---
If you want, I can commit this README update and push it to `main` now.
