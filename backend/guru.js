const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Set up MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_user',
  password: 'your_password',
  database: 'your_database'
});

// Connect to MySQL
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL!');
});

// API endpoint to handle form submission
app.post('/submit-form', (req, res) => {
  const { name, gender, address, telephone, pelajaran } = req.body;

  const query = 'INSERT INTO users (name, gender, address, telephone, pelajaran) VALUES (?, ?, ?, ?, ?)';
  
  db.query(query, [name, gender, address, telephone, pelajaran], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: 'Data saved successfully!' });
  });
});

// Start the server
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
