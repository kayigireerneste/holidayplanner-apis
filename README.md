# Holiday Planners - Backend Project

## Overview
Holiday Planners is a backend application designed to manage online tour booking operations. The project handles user authentication, tour management, booking functionality, and contact/testimony operations. This backend complements the initial static frontend built using ReactJS.

---

## Features
- **User Management:**
  - Registration, login, password changes, and user updates.
- **Tour Management:**
  - CRUD operations for tours.
- **Booking System:**
  - Secure booking operations with approval workflows.
- **Contacts and Testimonies:**
  - CRUD operations for user interactions and feedback.
- **API Documentation:**
  - Comprehensive Swagger UI for testing and documentation.

---

## Technologies Used
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **API Documentation:** Swagger UI
- **Additional Libraries:**
  - Authentication: `jsonwebtoken`, `bcrypt`
  - File Upload: `multer`
  - Email Service: `nodemailer`
  - Environment Management: `dotenv`

  ## .env preview

- API_KEY=
- PI_SECRET=
- CLOUD_NAME=
- DB_CONNECTION_LIVE=
- EMAIL_PASS=
- EMAIL_USER=
- JWT_EXP=1h
- JWT_SECRET=
- PORT=8800
- saltRounds=2


---

## Project Architecture
1. **Node.js and Express:** Handles server-side logic and routing.
2. **MongoDB:** Stores user data, tours, bookings, contacts, and testimonies.
3. **Swagger UI:** Provides endpoint documentation and easy testing.

### System Flow:
- **Frontend:** (Reference) Static ReactJS UI.
- **Backend:** RESTful APIs for all operations.
- **Database:** Centralized MongoDB instance.

---

## Setup Instructions

### Prerequisites
- Node.js (version >= 14.17.0)
- MongoDB

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd holidayplanner
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```
        - API_KEY=
        - PI_SECRET=
        - CLOUD_NAME=
        - DB_CONNECTION_LIVE=
        - EMAIL_PASS=
        - EMAIL_USER=
        - JWT_EXP=1h
        - JWT_SECRET=
        - PORT=8800
        - saltRounds=2
     ```

### Running the Application
1. Start the development server:
   ```bash
   npm start
   ```
2. Access the API at `http://localhost:8800`.
3. Open Swagger UI for documentation and testing at `http://localhost:8800/api-docs`.

---

## Usage Guidelines

### Authentication
- Register a user using the `/auth/signup` endpoint.
- Log in with `/auth/login` to obtain a token.
- Include the token in the `Authorization` header for protected routes.

### Tours
- Use `/tour` endpoints to manage tours.

### Bookings
- Book and manage tours using `/book` endpoints.

### Contacts and Testimonies
- CRUD operations available through `/contact` and `/testmony` endpoints.

---

## API Documentation
The complete API documentation is available in Swagger UI at `http://localhost:8800/api-docs`.

---

## Next Steps
- Integrate a payment gateway.
- Full-stack implementation by combining the backend with the existing ReactJS frontend.
