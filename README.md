# Library Management System API

## Overview
This Library Management System is a RESTful API for managing books and users in a library. It includes JWT-based authentication for secure access. Built with **Node.js**, **Express.js**, and **MongoDB**, and hosted on **Render**.

---

## Features
- **Books Management**: Add, view, update, and delete books.
- **User Authentication**: Register, login, and manage users with JWT.
- **Hosting**: Hosted on Render: [Library API](https://library-backend-raga.onrender.com/).
https://library-backend-raga.onrender.com/

---

## Setup Instructions

### 1. Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance like MongoDB Atlas)
- Code editor (e.g., VS Code)

### 2. Clone the Repository
```bash
git clone <repository-url>
cd <repository-folder>
npm install

```

### 3. Environment Variables
Create a .env file in the root directory and configure the following environment variables:

makefile
Copy code
PORT=5000
MONGO_URI=<Your MongoDB Connection URI>
JWT_SECRET=<Your JWT Secret Key>

### 4. Run the server
node ./backend/server.js

The server will start running on the specified port (default: http://localhost:5000).

# API Documentation

## API Endpoint Summary
url=https://library-backend-raga.onrender.com/

| **Category**       | **Endpoint**           | **Method** | **Description**                     |
|---------------------|------------------------|------------|-------------------------------------|
| **Authentication** | `/api/auth/register`   | POST       | Registers a new user.               |
| **Authentication** | `/api/auth/login`      | POST       | Authenticates a user.               |
| **Authentication** | `/api/auth/logout`     | POST       | Logs out the user.                  |
| **Books**          | `/api/books/`          | POST       | Adds a new book.                    |
| **Books**          | `/api/books/`          | GET        | Retrieves a list of all books.      |
| **Books**          | `/api/books/:id`       | GET        | Retrieves a book by its ID.         |
| **Books**          | `/api/books/:id`       | PUT        | Updates a book's details.           |
| **Books**          | `/api/books/:id`       | DELETE     | Deletes a book by its ID.           |


- **Authentication Required:** All endpoints under the "Books" category require the user to be logged in. Unauthorized users will receive a `401 Unauthorized` error.
- **JWT Token Validation:** Each request to the "Books" endpoints must include a valid JWT token in the authorization header (`Authorization: Bearer <token>`).
- **Error Handling:** If the token is missing, invalid, or expired, the server will reject the request, ensuring secure access to book-related operations.


## Authentication

### 1. Register User

**Endpoint:** `POST /api/auth/register`  
**Body:**

```json
{
  "name": "Abhinav",
  "email": "abhinav@gmail.com",
  "password": "pass",
  "membership_type": "Regular"
}

```
Response:

```json
{
  "message": "User registered successfully!",
  "user": {
    "id": "6755bc59538c186a3ff5b320",
    "name": "Abhinav",
    "email": "abhinav@gmail.com",
    "membership_type": "Regular",
    "registered_date": "2024-12-08T15:33:45.084Z"
  }
}

```

* * * * *

### 2\. Login User

**Endpoint:** `POST /api/auth/login`\
**Description:** Authenticates a user and returns their details.\
**Body:**

```json
{
  "email": "abhinav@gmail.com",
  "password": "pass"
}
```
**Response:**

```json
{
  "message": "Login successful!",
  "user": {
    "id": "6755bc59538c186a3ff5b320",
    "name": "Abhinav",
    "email": "abhinav@gmail.com",
    "membership_type": "Regular",
    "registered_date": "2024-12-08T15:33:45.084Z"
  }
}

```

### 3\. Logout User

**Endpoint:** `POST /api/auth/logout`\
**Description:** Logs out the user.\
**Response:**

```json

{
  "success": true,
  "message": "Logout successful!"
}
```
* * * * *

Book Management
---------------

### 1\. Add a Book

**Endpoint:** `POST /api/books/`\
**Description:** Adds a new book to the collection.\
**Body:**

```json

{
  "title": "harry potter",
  "author": "j k rowling",
  "published_year": 1950,
  "genre": "novel",
  "available_copies": 12
}
```
**Response:**

```json
{
  "title": "harry potter",
  "author": "j k rowling",
  "published_year": 1950,
  "genre": "novel",
  "available_copies": 12,
  "_id": "6755bcb2538c186a3ff5b328",
  "__v": 0
}
```
* * * * *

### 2\. View All Books

**Endpoint:** `GET /api/books/`\
**Description:** Retrieves a list of all books.\
**Response:**

```json

[
  {
    "_id": "675407991b4e4912214aecdb",
    "title": "new",
    "author": "me",
    "published_year": 2020,
    "genre": "new",
    "available_copies": 2,
    "__v": 0
  },
  {
    "_id": "6755bcb2538c186a3ff5b328",
    "title": "harry potter",
    "author": "j k rowling",
    "published_year": 1950,
    "genre": "novel",
    "available_copies": 12,
    "__v": 0
  }
]
```
* * * * *

### 3\. View a Book by ID

**Endpoint:** `GET /api/books/:id`\
**Description:** Retrieves a book's details by its ID.\
**Response:**

```json
{
  "_id": "6753fab51b4e4912214aecd3",
  "title": "Updated Book Title",
  "author": "me",
  "published_year": 200,
  "genre": "new",
  "available_copies": 2,
  "__v": 0
}
```
* * * * *

### 4\. Update a Book

**Endpoint:** `PUT /api/books/:id`\
**Description:** Updates a book's details.\
**Body:**

```json
{
  "available_copies": 0
}
```
**Response:**

```json

{
  "_id": "6753fab51b4e4912214aecd3",
  "title": "Updated Book Title",
  "author": "me",
  "published_year": 200,
  "genre": "new",
  "available_copies": 0,
  "__v": 0
}
```

* * * * *

### 5\. Delete a Book

**Endpoint:** `DELETE /api/books/:id`\
**Description:** Deletes a book by its ID.\
**Response:**

```json

{
  "message": "Book deleted successfully."
}
```
* * * * *

Error Handling
--------------

### Common Errors

-   **401 Unauthorized:** Returned when the user is not authenticated or no token is provided.
-   **500 Internal Server Error:** Returned for server-side issues.

* * * * *

License
-------

This project is licensed under the MIT License. Feel free to use, modify, and distribute it as needed.
