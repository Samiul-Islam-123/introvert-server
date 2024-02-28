# Introvert - Backend

Welcome to the backend codebase of Introvert, an Instagram clone.

## Description

This repository contains the backend code responsible for handling server-side logic, APIs, and database interactions for the Introvert application. It provides functionalities similar to Instagram, including user authentication, posting images, liking, commenting, and following other users.

## Features

- **RESTful API:** Implements a RESTful API to handle various functionalities required by the frontend.
- **User Authentication:** Provides user authentication using JWT (JSON Web Tokens) for secure login and access to protected endpoints.
- **Post Management:** Allows users to create, read, update, and delete posts.
- **Image Upload:** Supports image upload for user profile pictures and post images.
- **Likes and Comments:** Enables users to like posts and leave comments on posts.
- **Follow System:** Implements a follow system allowing users to follow/unfollow other users and view posts from followed users.
- **Middleware:** Utilizes middleware for tasks such as logging, error handling, etc.

## Technologies Used

- Node.js: JavaScript runtime environment
- Express.js: Web application framework for Node.js
- MongoDB: NoSQL database for storing application data
- Mongoose: MongoDB object modeling tool for Node.js
- JWT (JSON Web Tokens): Used for authentication and authorization
- Multer: Middleware for handling multipart/form-data, used for file uploads
- Cloudinary: Cloud-based image and video management service for image uploads and storage
- Other dependencies listed in `package.json`

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Samiul-Islam-123/introvert-server.git
