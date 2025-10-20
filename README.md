# Pokédex App

> Interactive web application to browse, search, and collect your favorite Pokémon

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://pokedex-app-eight-chi.vercel.app)
[![React](https://img.shields.io/badge/React-18.3.1-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue)](https://www.typescriptlang.org/)
[![Material-UI](https://img.shields.io/badge/Material--UI-5.16.7-blue)](https://mui.com/)

## 🎯 Overview

The Pokédex App is a responsive and interactive web application built using React and TypeScript. It allows users to browse through a list of Pokémon, view detailed information about each Pokémon, and "catch" their favorites to save them in a personal collection. The app fetches data from the [PokéAPI](https://pokeapi.co/), providing real-time access to Pokémon details, including their names, sprites, and types.

**Live Demo:** [pokedex-app-eight-chi.vercel.app](https://pokedex-app-eight-chi.vercel.app)

## ✨ Features

- **Browse Pokémon**: Navigate through paginated lists of Pokémon with smooth loading
- **Search Functionality**: Find specific Pokémon by name instantly
- **Detailed View**: Click on any Pokémon to view comprehensive information
- **Catch & Collect**: Save your favorite Pokémon with animated "catch" effects
- **Persistent Storage**: Your collection is saved in localStorage and persists across sessions
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Interactive UI**: Circular sprite images with hover effects and smooth animations
- **Real-time Data**: Integrated with PokéAPI for up-to-date Pokémon information

## 🛠️ Tech Stack

- **Frontend**: React 18.3.1
- **Language**: TypeScript 4.9.5
- **UI Framework**: Material-UI (MUI) 5.16.7
- **HTTP Client**: Axios 1.7.4
- **Routing**: React Router DOM 6.26.1
- **State Management**: React Hooks (custom hooks for complex logic)
- **API**: [PokéAPI](https://pokeapi.co/)
- **Storage**: localStorage for persistence
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/figlesias221/pokedex-app.git
cd pokedex-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
# or
yarn build
```

## 📁 Project Structure

```
pokedex-app/
├── public/               # Static assets
├── src/
│   ├── components/       # React components
│   ├── hooks/           # Custom React hooks
│   ├── services/        # API service layer
│   ├── App.tsx          # Main application component
│   ├── App.css          # Application styles
│   └── index.tsx        # Application entry point
├── package.json
├── tsconfig.json
└── README.md
```

## 🎨 Key Implementation Details

### Optimized Data Fetching
- Implemented pagination to efficiently handle large datasets
- Minimizes API calls and improves performance

### Custom Hooks
- Encapsulates complex logic for state management
- Promotes code reusability and maintainability

### Interactive Animations
- Smooth rotation animations when catching Pokémon
- Hover effects on Pokémon cards for enhanced UX

### Persistent Collections
- localStorage integration ensures caught Pokémon persist across sessions
- No backend required for basic functionality

## 🧪 Testing

Run the test suite:
```bash
npm test
# or
yarn test
```

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📄 License

This project is private and not licensed for public use.

## 🔗 Links

- **Live Demo**: [pokedex-app-eight-chi.vercel.app](https://pokedex-app-eight-chi.vercel.app)
- **PokéAPI**: [https://pokeapi.co/](https://pokeapi.co/)
- **Material-UI**: [https://mui.com/](https://mui.com/)

---

Built with ❤️ using React, TypeScript, and Material-UI
