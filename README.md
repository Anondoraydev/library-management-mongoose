# 📚 Library Management API

A powerful, scalable RESTful API for managing a library system, built using **Node.js**, **Express**, **TypeScript**, and **MongoDB**.
Ideal for handling book inventories, borrowing logic, and real-time availability.

![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![Express](https://img.shields.io/badge/Express-4.x-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-6.0+-green)

---

## 🚀 Key Features

✅ **Book Management** – CRUD operations for managing book data
✅ **Borrowing System** – Track borrow records with due dates
✅ **Inventory Management** – Automatically updates availability on borrow
✅ **Validation Layer** – Strong runtime validation for inputs
✅ **Error Handling** – Unified, descriptive, and structured error responses
✅ **Atomic Operations** – Ensures consistent data through MongoDB transactions
✅ **TypeScript Powered** – Static typing for safety and better DX

---

## 🛣️ API Endpoints

### 📘 Books

| Method | Endpoint         | Description             |
|--------|------------------|-------------------------|
| POST   | `/api/books`     | Add a new book          |
| GET    | `/api/books`     | List all books          |
| GET    | `/api/books/:id` | Get a specific book     |
| PUT    | `/api/books/:id` | Update a book's details |
| DELETE | `/api/books/:id` | Remove a book           |

---

### 🔁 Borrowing

| Method | Endpoint              | Description             |
|--------|-----------------------|-------------------------|
| POST   | `/api/borrow`         | Borrow one or more books |
| GET    | `/api/borrow/summary` | Get all borrow records  |

---

## 📥 Sample Payloads

### ➕ Create a Book

```http
POST /api/books
```

**Body:**
```json
{
  "title": "The Theory of Everything",
  "author": "Stephen Hawking",
  "isbn": "9780553380163",
  "copies": 5
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "68579df93227a7a9cec640e9",
    "title": "The Theory of Everything",
    "isbn": "9780553380163",
    "copies": 5,
    "available": true
  }
}
```

---

### 📦 Borrow Book

```http
POST /api/borrow
```

**Body:**
```json
{
  "book": "68579df93227a7a9cec640e9",
  "quantity": 1,
  "dueDate": "2025-07-18T00:00:00.000Z"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "64bc4a0f9e1c2d3f4b5a6789",
    "book": "64ab3f9e2a4b5c6d7e8f9012",
    "quantity": 1,
    "dueDate": "2025-07-18T00:00:00.000Z"
  }
}
```

---

## ❌ Error Response Format

```json
{
  "message": "Error description",
  "success": false,
  "error": {
    "name": "ValidationError",
    "details": {
      "field": "isbn",
      "message": "ISBN must be valid"
    }
  }
}
```

**Common HTTP Errors:**

- `400` – Bad Request (e.g. invalid inputs)
- `404` – Resource Not Found
- `409` – Conflict (e.g. duplicate ISBN)
- `500` – Server Error

---

## ⚙️ Setup Instructions

### 🔧 Prerequisites

- Node.js >= 18
- MongoDB >= 6.0
- npm >= 9

---

### 🛠️ Installation

```bash
git clone https://github.com/yourusername/library-management-api.git
cd library-management-api
npm install
cp .env.example .env
```

Update `.env`:
```env
DB_USER=yourMongoUsername
DB_PASS=yourMongoPassword
```

---

### 🚀 Running the Server

**For development:**
```bash
npm run dev
```

**For production:**
```bash
npm run build && npm start
```

---

### 🧪 Testing

```bash
npm test
```

---

## 🗃️ MongoDB Schema

### 📗 Book Schema

```ts
export enum BookGenre {
  FICTION = "FICTION",
  NON_FICTION = "NON_FICTION",
  SCIENCE = "SCIENCE",
  HISTORY = "HISTORY",
  BIOGRAPHY = "BIOGRAPHY",
  FANTASY = "FANTASY",
}

export interface IBook {
  title: string;
  author: string;
  genre: BookGenre;
  isbn: string;
  description?: string;
  copies: number;
  available?: boolean;
}
```

---

### 📘 Borrow Schema

```ts
{
  book: ObjectId,       // Reference to Book document
  quantity: number,
  dueDate: Date
}
```

---

## 🤝 Contribution Guide

1. 🍴 Fork the repository
2. 🌱 Create a branch: `git checkout -b feature/amazing-feature`
3. 💾 Commit your changes: `git commit -m 'Add amazing feature'`
4. 🚀 Push to the branch: `git push origin feature/amazing-feature`
5. 📬 Submit a Pull Request

---
