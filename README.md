# 🚀 MBST Challenge

This app is built with **Next.js 15** and **React 19**.

It is deployed [here](https://mbst-challenge.vercel.app).

## 🛠️ Getting Started

### 1️. Set Up Environment Variables

First, create a .env file in the root directory and add the following variables:

```
MOBILE_API_URL=
MOBILE_API_KEY=
```

### 2️. Install Dependencies

Run the following command to install the required dependencies:

```
npm i
```

### 3️. Start the Development Server

To start the development server, run:

```
npm run dev
```

The app will be available at localhost:3000.

## ⚡️ Building for Production

To generate an optimized production build, run:

```
npm run build
```

You can then preview the production build by running:

```
npm run start
```

## 🧪 End-to-End (E2E) Testing

This repository includes E2E tests built with Playwright. A mock server has been added to simulate mobile API responses. The tests both cover mobile and desktop and rely heavily in screenshots. Tests should be run in a Docker container to make sure the environment does not affect the generation of images.

To run the tests make sure Docker is running and execute:

```
docker compose up --build --abort-on-container-exit
```

## 📌 Additional Notes

- **Linting & Formatting**: ESLint and Prettier have been configured to ensure code consistency.
- **Responsive Design**: The app is fully responsive, utilizing flexbox and CSS grid for the list of tiles.
- **Accessibility**: Tested with AXE tools to ensure compliance with WCAG 2 standards.
- **Next.js App Router**: The app follows Next.js' App Router structure, where routing is based on the /app folder structure.
- **Styling**: The project uses CSS Modules for styling. While Tailwind CSS could have been a good alternative—especially for more dynamic components—CSS Modules were chosen for this implementation.
