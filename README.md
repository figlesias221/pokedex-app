# Pokedex App

pokedex-app-eight-chi.vercel.app

## Overview

The Pokédex App is a responsive and interactive web application built using React and TypeScript. It allows users to browse through a list of Pokémon, view detailed information about each Pokémon, and "catch" their favorites to save them in a personal collection. The app fetches data from the PokéAPI, providing real-time access to Pokémon details, including their names, sprites, and types.

## Key Features

I implemented a clean and user-friendly interface using Material UI, with additional enhancements for a polished look. The Pokémon list is paginated, allowing users to navigate through large datasets efficiently. Each Pokémon card features a circular sprite image with hover effects for an engaging browsing experience. Users can search for specific Pokémon by name and click on any Pokémon to view more detailed information.

When a Pokémon is caught, a smooth rotation animation is triggered on the Pokémon's image, adding a dynamic and fun interaction. The caught Pokémon are stored in localStorage, ensuring the collection persists across sessions. The app also includes responsive design elements, making it accessible and visually appealing on both desktop and mobile devices.

## Development and Optimization

The data fetching process was optimized by implementing pagination. Additionally, custom hooks were utilized to manage state and encapsulate complex logic, resulting in cleaner and more maintainable code.
