**Movie Reservation System**

A simple RESTful API using Node.js, Express.js, and MongoDB to manage a movie reservation system.

**Features**

* **Movie Listing Endpoint** : Retrieve a list of available movies.
* **Check Availability Endpoint** : Check the availability of a specific time slot for a movie.
* **Reserve Time Slot Endpoint** : Reserve a time slot for a movie.
* **User Registration and Login** : Register new users and log in existing users to obtain access tokens.
* **Token Authentication** : Secure the movie endpoints with JWT-based authentication.

**Requirements**

* Node.js
* MongoDB

**Setup**

1. Clone the repository:
   git clone <repository_url>
   cd Movie-Reservation-System
2. Install dependencies:
   npm install
3. Create a `.env` file in the root directory and add the following environment variables:
   MONGO_URI=your_mongodb_connection_string
   ACCESS_TOKEN_SECRET=your_secret_key
4. Start the server:
   npm start

**API Endpoints**

**User Registration**

* **URL** : `/api/users/register`
* **Method** : `POST`
* **Body** :
  {
  "username": "your_username",
  "password": "your_password"
  }
* **Response** :
  {
  "message": "User registered successfully"
  }

**User Login**

* **URL** : `/api/users/login`
* **Method** : `POST`
* **Body** :
  {
  "username": "your_username",
  "password": "your_password"
  }
* **Response** :
  {
  "token": "your_jwt_token"
  }

**Movie Listing**

* **URL** : `/api/movies`
* **Method** : `GET`
* **Headers** :
  Authorization: Bearer your_jwt_token
* **Response** :
  [
  {
  "_id": "movie_id",
  "title": "Movie Title",
  "timeSlots": [
  {
  "_id": "slot_id",
  "slot": "Time Slot",
  "capacity": 50,
  "booked": 10
  }
  ]
  }
  ]

**Check Availability**

* **URL** : `/api/movies/:movieId/slots/:slotId/availability`
* **Method** : `GET`
* **Headers** :
  Authorization: Bearer your_jwt_token
* **Response** :
  {
  "availableCapacity": 40
  }

**Reserve Time Slot**

* **URL** : `/api/movies/:movieId/slots/:slotId/reserve`
* **Method** : `POST`
* **Headers** :
  Authorization: Bearer your_jwt_token
* **Body** :
  {
  "numberOfSeats": 2
  }
* **Response** :
  {
  "message": "Time slot reserved successfully"
  }
