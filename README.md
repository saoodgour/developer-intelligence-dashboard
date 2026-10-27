# Developer Intelligence Dashboard

A web-based dashboard to explore developer profiles and compare their technical scores.

## Features
- View developer profiles
- Search developers
- Sort developer data
- Visual score bars
- Dark, modern dashboard UI

## Tech Stack
- HTML
- CSS
- JavaScript
- Java
- Spring Boot
- Maven

## Project Structure
- `index.html` — dashboard page
- `styles.css` — UI styling
- `app.js` — frontend logic and API connection
- `backend/` — Spring Boot backend

## Run Locally

### 1. Start the backend
Open a terminal in the `backend` folder and run:

```bash
mvnw.cmd spring-boot:run
```

The backend runs at `http://localhost:8080`.

### 2. Open the frontend
Open `index.html` using VS Code Live Server.

The dashboard fetches developer data from:

`http://localhost:8080/api/developers`

## Note
This project currently uses sample developer data for learning and demonstration purposes.
