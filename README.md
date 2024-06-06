# Movie Reservation System API

## Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd movie-reservation-system
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Configure MongoDB URI in `.env`:

   ```javascript
   module.exports = {
       mongoURI: 'your-mongodb-uri'
   };
   ```
4. Start the server:

   ```bash
   npm start
   ```

## API Endpoints

### Get List of Movies

- **Endpoint:** `GET /api/movies`
- **Description:** Retrieve a list of available movies with their time slots and capacities.
- **Response:**

  ```json
  [
      {
          "_id": "movieId",
          "title": "Movie Title",
          "timeSlots": [
              {
                  "_id": "slotId",
                  "slot": "Time Slot",
                  "capacity": 100,
                  "booked": 20
              }
          ]
      }
  ]
  ```

### Check Availability

- **Endpoint:** `GET /api/movies/:movieId/availability/:slotId`
- **Description:** Check the availability of a specific time slot for a movie.
- **Parameters:** `movieId` (path), `slotId` (path)
- **Response:**

  ```json
  {
      "availableCapacity": 80
  }
  ```

### Reserve Time Slot

- **Endpoint:** `POST /api/movies/:movieId/reserve/:slotId`
- **Description:** Reserve a time slot for a movie.
- **Parameters:** `movieId` (path), `slotId` (path), `numPeople` (body)
- **Response:**

  ```json
  {
      "message": "Reservation successful",
      "remainingCapacity": 70
  }
  ```

## Error Handling

- All error responses will have the following format:

  ```json
  {
      "error": "Error message"
  }
  ```

## Development

- To start the server in development mode with nodemon:

  ```bash
  npm start
  ```
