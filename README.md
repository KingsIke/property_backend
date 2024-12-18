# Property Backend API

This is the backend API for the Property Listing application. It is built with Node.js and Express and provides endpoints to fetch a list of properties and details of a specific property. The data is currently static, but this can be easily extended to connect with a database in the future.

## Features

- **Get a list of properties**: Returns a paginated list of properties.
- **Get property by ID**: Returns the details of a specific property based on its ID.
- **Pagination**: Supports pagination to manage large sets of property data.
- **Error Handling**: Basic error handling for invalid requests.

## API Endpoints

### `GET /api/properties`

Fetches a list of properties with optional pagination.

**Query Parameters:**

- `page`: The page number (default is `1`).
- `limit`: The number of properties per page (default is `10`).

**Example Request:**
GET http://localhost:5000/api/properties?page=1&limit=10

### `GET /api/properties/:id`

Fetches the details of a specific property based on its `id`.

**Example Request:**
GET http://localhost:5000/api/properties/1

### Setup & Installation

1. Clone the repository:

   ```javascript
   git clone https://github.com/KingsIke/property_backend
   cd property-backend
   ```

2. Install dependencies:<br>

npm install

3. Start the server:<br>

npm start

4. The backend will be running on http://localhost:5000.

# Folder Structure

```javascript

property-backend/
├── controllers/           # Business logic for API routes
├── models/                # Data models (e.g., property data)
├── router/                # Routes for API endpoints
├── .gitignore             # Git ignore file
├── package.json           # Dependencies and scripts
└── README.md              # Project README
```

# Dependencies

express: Web framework for Node.js.<br>
nodemon: A tool that automatically restarts the server on file changes.

# License

This project is licensed under the MIT License - see the LICENSE file for details.
