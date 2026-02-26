# Aldrian Meneses - Software Engineer Portfolio

This is a modern, full-stack portfolio application featuring a highly interactive React (Vite) frontend with Framer Motion animations and a robust Java Spring Boot backend.

## Tech Stack
- **Frontend**: React, Vite, Tailwind CSS (v3), Framer Motion, React Icons.
- **Backend**: Java 21, Spring Boot 3.4, Spring Data JPA, MySQL.

## Project Structure
- `/frontend`: React application built with Vite.
- `/backend`: Spring Boot application.

## Prerequisites
1. **Node.js** (v18+ recommended) and **npm** installed on your system.
2. **Java Development Kit (JDK) 21** installed.
3. **Maven** installed (or use the provided wrapper if applicable).
4. **MySQL Server** installed and running on port 3306.

---

## Running the Backend (Spring Boot)

1. **Database Setup**: Ensure MySQL is running. The application is configured to create the database `portfolio_db` automatically if it doesn't exist, using root/password. If your credentials differ, update them in `backend/src/main/resources/application.properties`:
   ```properties
   spring.datasource.username=root
   spring.datasource.password=your_password
   ```

2. **Start the Application**:
   Open a terminal in the `backend/` directory:
   ```bash
   cd backend
   mvn spring-boot:run
   ```
   The backend will start on `http://localhost:8080`.

---

## Running the Frontend (React Vite)

1. **Install Dependencies**:
   Open a new terminal in the `frontend/` directory and run:
   ```bash
   cd frontend
   npm install
   ```

2. **Start the Development Server**:
   ```bash
   npm run dev
   ```
   The Vite server will start on `http://localhost:5173`.

---

## Troubleshooting
- **Missing Profile Picture**: By default, the app points to `/assets/profile.jpg`. If the image is missing, a stylized fallback avatar is displayed. You can add your actual image at `frontend/public/assets/profile.jpg`.
- **CORS Issues**: The Spring backend allows CORS for `http://localhost:5173`. Make sure the frontend runs on this port.
- **NPM Not Found**: If `npm install` fails with "term not recognized", you need to install [Node.js](https://nodejs.org/).
