const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());  // Add this line to enable CORS
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root', // Replace 'your_password' with your MySQL root password
  database: 'awayhome'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

app.get('/animals', (req, res) => {
  let query = `
    SELECT a.*, addr.country, addr.city, GROUP_CONCAT(pf.photo_url) AS photos
    FROM Animals a
    LEFT JOIN Addresses addr ON a.address_id = addr.id
    LEFT JOIN PetFlyers pf ON a.id = pf.pet_id
    WHERE 1=1
  `;
  const params = [];

  if (req.query.status) {
    query += ' AND a.status = ?';
    params.push(req.query.status);
  }
  if (req.query.type) {
    query += ' AND a.type = ?';
    params.push(req.query.type);
  }
  if (req.query.gender) {
    query += ' AND a.sex = ?';
    params.push(req.query.gender);
  }
  if (req.query.name) {
    query += ' AND a.name LIKE ?';
    params.push(`%${req.query.name}%`);
  }
  if (req.query.location) {
    query += ' AND (addr.city LIKE ? OR addr.country LIKE ?)';
    params.push(`%${req.query.location}%`, `%${req.query.location}%`);
  }

  query += ' GROUP BY a.id';

  db.query(query, params, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    results.forEach(result => {
      if (result.photos) {
        result.photos = result.photos.split(',');
      }
    });
    res.json(results);
  });
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
