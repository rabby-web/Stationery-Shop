# Stationery Shop API

A RESTful API built with Express, TypeScript, and MongoDB (Mongoose) to manage products and orders for a stationery shop. Includes CRUD operations, order processing, and revenue calculation.

## Features

- **Product Management**: Create, retrieve, update, and delete stationery products.
- **Order Processing**: Place orders, manage inventory, and handle stock status.
- **Revenue Calculation**: Calculate total revenue from all orders using aggregation.
- **Robust Error Handling**: Validation, stock checks, and clear error responses.

## Endpoints

### Product Endpoints

- **Create Product**: `POST /api/products`
- **Get All Products** (with optional search): `GET /api/products?searchTerm=<name|brand|category>`
- **Get Product by ID**: `GET /api/products/:productId`
- **Update Product**: `PUT /api/products/:productId`
- **Delete Product**: `DELETE /api/products/:productId`

### Order Endpoints

- **Place an Order**: `POST /api/orders`
- **Calculate Revenue**: `GET /api/orders/revenue`

## Quick Start

1. **Clone Repository**
   ```bash
   git clone <repository_url>
   cd stationery-shop-api
   ```
2. **Install Dependencies**
   ```bash
   npm install
   ```
3. **Set Up Environment Variables .env**
   ```bash
   MONGODB_URI=<your_mongo_connection_string>
   PORT=3000
   ```
4. **Set Up Environment Variables .env**
   ```bash
   MONGODB_URI=<your_mongo_connection_string>
   PORT=3000
   ```
5. **Set Up Environment Variables .env**
   ```bash
   npm run start:dev
   ```
