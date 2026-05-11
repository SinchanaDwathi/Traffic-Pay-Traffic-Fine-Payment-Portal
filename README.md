# TrafficPay — Traffic Fine Payment Portal

A modern Traffic Challan Payment System developed using HTML, CSS, JavaScript, Node.js, and Express.js.

This project follows the **SOA (Service-Oriented Architecture)** concept where frontend and backend work as separate services communicating through REST APIs.

The frontend (`index.html`) acts as the client service, while the backend (`server.js`) acts as the API service.

---

# SOA Concept Used

This project uses:

* Service-Oriented Architecture (SOA)
* REST API Communication
* Client-Server Architecture

## How SOA is Used Here

### Frontend Service

The frontend UI is built using:

* HTML
* CSS
* JavaScript

It sends requests to backend services using REST APIs.

Example:

```js
fetch("http://localhost:3000/getFines/KA01AB1234")
```

---

### Backend Service

The backend service is built using:

* Node.js
* Express.js

It provides API services such as:

```bash
GET /getFines/:vehicle
POST /payFine
```

The frontend and backend are independent services communicating over HTTP.

This separation of services is the core idea of SOA.

---

# Technologies Used

* HTML5
* CSS3
* JavaScript
* Node.js
* Express.js
* CORS
* REST API
* SOA Architecture

---

# Project Structure

```bash
TrafficPay/
│
├── index.html
├── server.js
├── package.json
└── README.md
```

---

# Important Note

This project will work only when the Node.js server is running.

First start the backend server:

```bash
node server.js
```

After that open:

```bash
index.html
```

in browser.

---

# Why Public HTML Link Will Not Work

If you upload only the HTML file to GitHub Pages or open it using a direct public link, the application will NOT work properly.

Because the frontend uses:

```js
const API_BASE = "http://localhost:3000";
```

This localhost server exists only on your own computer.

So the backend must be running locally before opening the HTML file.

---

# How To Run The Project

## Step 1 — Install Node.js

Download Node.js:

https://nodejs.org

---

## Step 2 — Install Dependencies

Open terminal inside project folder and run:

```bash
npm install express cors
```

---

## Step 3 — Start Backend Server

Run:

```bash
node server.js
```

You should see:

```bash
🚀 Server running at http://localhost:3000
```

---

## Step 4 — Open Frontend

Now open:

```bash
index.html
```

directly in browser.

---

# REST API Endpoints

## 1. Get Fines

```bash
GET /getFines/:vehicle
```

Example:

```bash
http://localhost:3000/getFines/KA01AB1234
```

---

## 2. Pay Fine

```bash
POST /payFine
```

Request Body:

```json
{
  "fineId": "F001"
}
```

---

# Vehicle Numbers Available In Code

The following demo vehicle numbers are already available in `server.js`.

## Bike Vehicles

```bash
KA01AB1234
MH12XY5678
```

---

## Car Vehicles

```bash
KA05XY9999
DL8CAF9988
TN09BZ3344
```

---

## Truck Vehicles

```bash
HR55AK7744
UP32GH1122
```

---

# Sample Fine Data

Current backend contains sample traffic fine data such as:

* No Helmet
* Signal Jump
* Over Speed

with payment status:

* UNPAID
* PAID

---

# Features

* Modern Responsive UI
* Single Page Application (SPA)
* REST API Integration
* SOA Based Architecture
* Fine Search System
* Payment Simulation
* Digital Receipt Generation
* Mobile Responsive Design
* Toast Notifications
* Loading Animations

---

# Limitations

Currently this project uses:

* In-memory data storage
* Mock payment system
* Localhost backend server

Data resets whenever the server restarts.

---

# Future Improvements

* MongoDB Integration
* MySQL Database
* JWT Authentication
* Real Payment Gateway
* Cloud Deployment
* Admin Dashboard
* User Login System

---

# Author

Developed for educational and demonstration purposes using Node.js, Express.js, REST APIs, and SOA concepts.
