const express = require('express');
const { Pool } = require('pg');

const app = express();
const pool = new Pool({
    user: 'postgres',
    host: 'db',
    database: 'testdb',
    password: 'postgres',
    port: 5432
});

app.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.json({ message: 'Hello, Multi-Stage Docker Compose!', time: result.rows[0] });
    } catch (err) {
        console.error(err);
        res.status(500).send("Database error");
    }
});

app.listen(5000, () => {
    console.log('Backend running on port 5000');
});
