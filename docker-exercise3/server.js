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
    const result = await pool.query('SELECT NOW()');
    res.json({ message: 'Hello, Docker Compose!', time: result.rows[0] });
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
