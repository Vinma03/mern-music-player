A music player application built with the MERN stack (MongoDB, Express, React, Node.js).

# Music Player Application

This is a full-featured music player application built using the MERN stack (MongoDB, Express, React, Node.js). The application allows users to browse, play, and manage their music library.

## Features

- **User Authentication**: Register and login with secure authentication.
- **Music Library**: Browse and search for songs, albums, and artists.
- **Playlist Management**: Create, edit, and delete playlists.
- **Music Player**: Play, pause, skip, and control volume of the music.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Technologies Used

- **MongoDB**: Database to store user information and music data.
- **Express**: Backend framework to build the RESTful API.
- **React**: Frontend library for building the user interface.
- **Node.js**: Runtime environment to execute JavaScript on the server.
- **JWT**: JSON Web Tokens for secure user authentication.
- **Mongoose**: ODM for MongoDB to interact with the database.
- **Redux**: State management for React applications.
- **Sass**: CSS pre-processor for styling the application.

## Installation

### Prerequisites

- Node.js and npm installed on your machine
- MongoDB instance running locally or on a cloud service

### Backend Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/music-player-mern.git
   cd music-player-mern
   ```

2. Install backend dependencies:
   ```sh
   cd backend
   npm install
   ```

3. Create a `.env` file in the `backend` directory and add the following environment variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the backend server:
   ```sh
   npm start
   ```

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```sh
   cd ../frontend
   ```

2. Install frontend dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file in the `frontend` directory and add the following environment variables:
   ```env
   REACT_APP_API_URL=http://localhost:5000/api
   ```

4. Start the frontend development server:
   ```sh
   npm start
   ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Register a new account or login with your existing credentials.
3. Browse the music library, create playlists, and enjoy your favorite music.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes. Ensure that your code adheres to the project's coding standards and passes all tests.
