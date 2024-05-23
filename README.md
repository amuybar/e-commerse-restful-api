# E-Commerce Backend API

## Introduction
This is a simple e-commerce backend API built with Node.js and TypeScript. It provides functionalities for managing users, products, and orders.

## Features
- User Management
  - Create a user
  - Get user details
  - Update user details
  - Delete a user
- Product Management
  - Add a product
  - Get all products
  - Get a product by ID
  - Update a product by ID
  - Delete a product by ID
- Order Management
  - Create an order
  - Get all orders
  - Get order details by ID

## Endpoints

### User Endpoints
- **POST /users**: Create a new user
- **GET /users/:id**: Get user details by ID
- **PUT /users/:id**: Update user details by ID
- **DELETE /users/:id**: Delete a user by ID

### Product Endpoints
- **POST /products**: Add a new product
- **GET /products**: Get all products
- **GET /products/:id**: Get product details by ID
- **PUT /products/:id**: Update product details by ID
- **DELETE /products/:id**: Delete a product by ID

### Order Endpoints
- **POST /orders**: Create a new order
- **GET /orders**: Get all orders
- **GET /orders/:id**: Get order details by ID

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/amuybar/e-commerse-restful-api.git
   cd e-commerse-restful-api

2. Install dependencies:
    ```sh
    npm install

3. Compile TypeScript:
     ```sh
     npm run build

4. Start the server:
    ```sh
    npm start

## Access the end point in swagger doccumentation here:
 -Paste this in your browser when youve runned the project

 ```sh
 http://localhost:3000/api-docs

```
## Note:
- This is a basic implementation of a RESTful API for an e-commerce platform. It does not include authentication, authorization, or any other security measures

    