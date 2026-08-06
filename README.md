# 🚀 Mongoose with Express

A beginner-friendly project demonstrating how to integrate **MongoDB**, **Mongoose**, and **Express.js** to perform database operations. This project is ideal for learning how to connect an Express server with MongoDB using Mongoose.

---

## 📌 Features

- Connect Express.js with MongoDB
- Create Mongoose Schemas & Models
- Insert documents into MongoDB
- Retrieve documents
- Update documents
- Delete documents
- REST API structure
- Clean and simple project structure

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose

---

## 📂 Project Structure

```
Mongoose_with_express/
│
├── models/
│   └── model.js
│
├── index.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/Ganesh-Machale/Mongoose_with_express.git
```

### 2. Navigate to the project

```bash
cd Mongoose_with_express
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start MongoDB

Make sure MongoDB is running on your local machine.

### 5. Run the project

```bash
node index.js
```

or

```bash
nodemon index.js
```

---

## 📚 What You'll Learn

- Connecting MongoDB with Express
- Creating Schemas using Mongoose
- Creating Models
- Saving documents
- Finding documents
- Updating documents
- Deleting documents
- Basic CRUD Operations

---

## 📖 Example CRUD Operations

### Create

```javascript
const student = new Student({
  name: "Ganesh",
  age: 20
});

await student.save();
```

### Read

```javascript
const students = await Student.find();
```

### Update

```javascript
await Student.updateOne(
  { name: "Ganesh" },
  { age: 21 }
);
```

### Delete

```javascript
await Student.deleteOne({
  name: "Ganesh"
});
```

---

## 🎯 Future Improvements

- RESTful API endpoints
- Validation
- Error handling
- Environment variables (.env)
- MVC Architecture
- Authentication using JWT

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to fork the repository and submit a pull request.

---

## 👨‍💻 Author

**Ganesh Machale**

- GitHub: https://github.com/Ganesh-Machale

---

## ⭐ Support

If you found this project helpful, please consider giving it a **⭐ Star** on GitHub.

Happy Coding! 🚀
