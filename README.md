# Nightreign Board

Nightreign Board is a full-stack message board application built with **Spring Boot (Java)** for the backend, **PostgreSQL** for data persistence, and a **React.js** frontend.  
It allows users to create and view posts, with new posts automatically displayed at the top of the feed.

---

## 🚀 Features
- Create and view posts with automatic ID generation.
- Posts displayed in reverse chronological order (newest first).
- RESTful API built with Spring Boot.
- Persistent storage with PostgreSQL.
- Configurable through `application.properties`.
- Frontend powered by React for dynamic user interaction.

---

## 🛠️ Tech Stack
**Backend**
- Java 17  
- Spring Boot  
- Spring Data JPA  
- PostgreSQL  

**Frontend**
- React.js  
- JavaScript (ES6+)  
- CSS  

**Other**
- REST API Architecture  
- Gradle/Maven (depending on setup)  

---

## 📂 Project Structure
nightreignboard/
├── backend/
│ ├── src/main/java/com/nightreignboard/
│ │ ├── NightreignboardApplication.java
│ │ ├── controller/PostController.java
│ │ ├── model/Post.java
│ │ └── repository/PostRepo.java
│ └── resources/application.properties
└── frontend/
├── src/
│ ├── App.js
│ ├── components/
│ └── styles/
└── public/index.html

yaml
Copy code

---

## ⚙️ Installation & Setup

### Prerequisites
- Java 17+
- Node.js & npm
- PostgreSQL installed and running

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/nightreignboard.git
   cd nightreignboard/backend
Configure application.properties:

properties
Copy code
spring.datasource.url=jdbc:postgresql://localhost:5432/nightreignboard
spring.datasource.username=yourusername
spring.datasource.password=yourpassword
Run the Spring Boot application:

bash
Copy code
./mvnw spring-boot:run
Frontend Setup
Navigate to the frontend folder:

bash
Copy code
cd ../frontend
Install dependencies:

bash
Copy code
npm install
Start the React development server:

bash
Copy code
npm start
🌐 Usage
Backend runs on: http://localhost:9090

Frontend runs on: http://localhost:3000

API Endpoints:

GET /posts → Fetch all posts

POST /posts → Add a new post

🧑‍💻 Author
Leonardo Lazarevic

Bachelor of Science in Computer Science, Emory University
