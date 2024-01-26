# Task Manager Backend

This is the backend component of a Task Manager application built using Node.js, Express, and MongoDB. The purpose of this project is to provide a robust and scalable backend to manage tasks for users. The API supports CRUD (Create, Read, Update, Delete) operations for tasks, as well as user authentication.

## Table of Contents
- Prerequisites
- Installation
- Configuration
- Usage
- API Endpoints
- Authentication
- Error Handling

## Prerequisites
Before you begin, ensure you have the following installed:
- Node.js
- MongoDB

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/task-manager-backend.
   
## Configuration
1. Create a `.env` file in the root directory.
2. Add the following configurations to the `.env` file:


## API Endpoints
- GET /tasks: Get all tasks.
- POST /tasks: Create a new task.
- PATCH /tasks/:id: Update a task by ID.
- DELETE /tasks/:id: Delete a task by ID.
- POST /tasks/:id: Mark task as completed


## Authentication
To perform CRUD operations on tasks, users need to be authenticated. Use the /users endpoints to register and login. The authentication token should be included in the headers of requests to secure routes.

## Error Handling
Error responses follow a standardized format, providing a message and status code. Refer to the [ErrorHandling.md](ErrorHandling.md) file for more details.

