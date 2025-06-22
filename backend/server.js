const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'XSSDEMO2', 
    password: 'ReflectedXSS_Attack',  // Change if needed
    database: 'reflected_xss'
});

db.connect(err => {
    if (err) throw err;
    console.log('✅ MySQL Connected...');
});

// 🟢 Signup API
app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], (err, result) => {
        if (err) return res.status(500).send('Error signing up');
        res.send('Signup successful');
    });
});

// 🟢 Login API
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    db.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, results) => {
        if (err) return res.status(500).send('Error logging in');
        if (results.length > 0) {
            res.send({ message: 'Login successful', username });
        } else {
            res.status(401).send('Invalid credentials');
        }
    });
});

// 🛑 VULNERABLE SEARCH API (Allows XSS)
app.get("/search", (req, res) => {
    const query = req.query.q;
    if (!query) return res.send("<h3>Search something...</h3>");

    // 🛑 VULNERABILITY: Directly inserting user input into the response
    res.send(`
        <h2>Search Results for:</h2>
        <p>${query}</p>
    `);
});

//🛑 logout route
app.post("/logout", (req, res) => {
    res.send({ message: "Logged out successfully" });
});


app.listen(5000, () => {
    console.log("Server running on port 5000");
});
