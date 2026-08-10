# 🚀 Mongoose with Express.js

A beginner-friendly **Node.js backend project** demonstrating how to integrate **Express.js, MongoDB, and Mongoose** to perform database operations and implement CRUD functionality.

This project was created to understand how a backend server communicates with MongoDB using Mongoose.

---

## 📌 Project Overview

This project demonstrates the basic workflow of building a backend application using:

* **Node.js** – JavaScript runtime environment
* **Express.js** – Backend web framework
* **MongoDB** – NoSQL database
* **Mongoose** – ODM for MongoDB

The project focuses on creating schemas and models, connecting to MongoDB, and performing database operations such as **Create, Read, Update, and Delete (CRUD)**.

---

## ✨ Features

* 🔗 Connect Express.js with MongoDB
* 📋 Create Mongoose schemas and models
* ➕ Insert documents into MongoDB
* 🔍 Retrieve documents from MongoDB
* ✏️ Update existing documents
* 🗑️ Delete documents
* ⚡ Perform basic CRUD operations
* 🌐 Use Express.js for backend development
* 📁 Understand basic backend project structure

---

## 🛠️ Technologies Used

| Technology     | Purpose              |
| -------------- | -------------------- |
| **Node.js**    | JavaScript runtime   |
| **Express.js** | Backend framework    |
| **MongoDB**    | Database             |
| **Mongoose**   | MongoDB ODM          |
| **JavaScript** | Programming language |
| **Nodemon**    | Development server   |

---

## 📂 Project Structure

```text
Mongoose_with_express/
│
├── Models/
│   └── model.js
│
├── Public/
│
├── views/
│
├── index.js
├── init.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Ganesh-Machale/Mongoose_with_express.git
```

### 2. Navigate to the Project

```bash
cd Mongoose_with_express
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start MongoDB

Make sure MongoDB is installed and running on your local machine.

If you are using **MongoDB Compass**, make sure your MongoDB server is running before starting the application.

### 5. Start the Application

```bash
node index.js
```

For development with Nodemon:

```bash
nodemon index.js
```

---

## 🔄 CRUD Operations

### ➕ Create

Create a new document using a Mongoose model:

```javascript
const student = new Student({
    name: "Ganesh",
    age: 20
});

await student.save();
```

---

### 🔍 Read

Retrieve documents from MongoDB:

```javascript
const students = await Student.find();
```

---

### ✏️ Update

Update an existing document:

```javascript
await Student.updateOne(
    { name: "Ganesh" },
    { age: 21 }
);
```

---

### 🗑️ Delete

Delete a document:

```javascript
await Student.deleteOne({
    name: "Ganesh"
});
```

---

## 📚 What I Learned

Through this project, I learned:

* How Node.js works with Express.js
* How to connect MongoDB with a Node.js application
* How to create Mongoose schemas
* How to create and use Mongoose models
* How to insert documents into MongoDB
* How to retrieve data using queries
* How to update documents
* How to delete documents
* How CRUD operations work in a backend application

---

## 🎯 Future Improvements

Some features that can be added in the future:

* [ ] RESTful API endpoints
* [ ] Input validation
* [ ] Better error handling
* [ ] Environment variables using `.env`
* [ ] MVC architecture
* [ ] Authentication and authorization
* [ ] JWT-based authentication
* [ ] Frontend integration using React.js
* [ ] Deployment to a cloud platform

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

If you want to improve this project:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Commit your changes
5. Push the branch
6. Create a Pull Request

---

## 👨‍💻 Author

**Ganesh Machale**

🎓 B.Tech Computer Science & Engineering

GitHub:
https://github.com/Ganesh-Machale

---

## ⭐ Support

If you found this project useful for learning **Node.js, Express.js, MongoDB, or Mongoose**, consider giving the repository a ⭐ Star.

**Happy Coding! 🚀**
