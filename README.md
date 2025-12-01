# RESTExplorer: NationsFinder

## Overview
RESTExplorer: NationsFinder is a modern, responsive web application built with TypeScript, React Router v7, and Tailwind CSS. It allows users to browse, search, and filter information about independent countries worldwide by integrating with the public REST Countries API.

## Features
- **Comprehensive Country Data**: View detailed information for a vast range of independent countries.
- **Search Functionality**: Easily find countries by their common name.
- **Region Filtering**: Filter countries by continent/region (Africa, Americas, Asia, Europe, Oceania).
- **Dynamic Routing**: Utilizes React Router v7 for seamless client-side navigation and URL management.
- **Responsive Design**: Crafted with Tailwind CSS to ensure optimal viewing across various devices and screen sizes.
- **Fast Development Experience**: Leverages Vite for rapid development and optimized builds.
- **Containerized Environment**: Docker support for consistent development and deployment workflows.

## Getting Started
To get a local copy of RESTExplorer up and running, follow these steps.

### Installation
1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/Emafido/Nationsfinder.git
    cd Nationsfinder
    ```
2.  **Install Dependencies**:
    ```bash
    npm install
    ```
3.  **Run in Development Mode**:
    ```bash
    npm run dev
    ```
    The application will typically be available at `http://localhost:5173` (or another port if 5173 is in use).

### Docker Setup (Optional)
For a containerized environment, you can use Docker:
1.  **Build the Docker Image**:
    ```bash
    docker build -t nationsfinder .
    ```
2.  **Run the Docker Container**:
    ```bash
    docker run -p 3000:3000 nationsfinder
    ```
    The application will be accessible at `http://localhost:3000`.

## Usage
Once the application is running, you can:

-   **Navigate the Home Page**: The landing page provides an introduction to the application.
-   **Explore Countries**: Click on the "Countries" link in the navigation bar to view a list of all independent countries.
-   **Search for a Country**: Use the search input field on the "Countries" page to find specific countries by name.
-   **Filter by Region**: Select a region from the dropdown on the "Countries" page to narrow down the list.
-   **View Country Details**: Click on any country from the list to see its detailed information, including official name, capital, region, subregion, population, currency, and flag.
-   **Learn More**: Visit the "About" page for a description of the project and the API used.

## Technologies Used

| Technology         | Description                                        | Link                                                                      |
| :----------------- | :------------------------------------------------- | :------------------------------------------------------------------------ |
| **TypeScript**     | Superset of JavaScript that adds static typing.    | [TypeScript](https://www.typescriptlang.org/)                             |
| **React**          | A JavaScript library for building user interfaces. | [React](https://react.dev/)                                               |
| **React Router v7**| Client-side routing library for React.             | [React Router](https://reactrouter.com/en/main)                           |
| **Node.js**        | JavaScript runtime for server-side operations.     | [Node.js](https://nodejs.org/en)                                          |
| **Vite**           | Next-generation frontend tooling.                  | [Vite](https://vitejs.dev/)                                               |
| **Tailwind CSS**   | A utility-first CSS framework for rapid UI development. | [Tailwind CSS](https://tailwindcss.com/)                                  |
| **Docker**         | Containerization platform for consistent environments. | [Docker](https://www.docker.com/)                                         |
| **REST Countries API** | Public API for country data.                   | [REST Countries](https://restcountries.com/)                              |

## Contributing
We welcome contributions to the RESTExplorer project! To contribute:

1.  **Fork the repository**.
2.  **Create a new branch** for your feature or bug fix: `git checkout -b feature/your-feature-name`.
3.  **Make your changes** and ensure they adhere to the project's coding style.
4.  **Test your changes** thoroughly.
5.  **Commit your changes** with a descriptive commit message.
6.  **Push your branch** to your forked repository.
7.  **Open a Pull Request** to the `main` branch of this repository, describing your changes and their benefits.

## License
This project is currently unlicensed. Please contact the author for licensing information.

## Author
**IMAFIDON EMMANUEL**
-   LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/your-username)
-   Twitter: [Your Twitter Profile](https://twitter.com/your-username)
-   Portfolio: [Your Portfolio/Website](https://your-portfolio.com)

---
### Badges
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)