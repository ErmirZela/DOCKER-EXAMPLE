const express = require("express");
const pool = require("./db");  // Import the database connection

const app = express();

app.get("/", async (req, res) => {
    try {
        const result = await pool.query("SELECT NOW()");
        res.json({ message: "Hello, Multi-Stage Docker Compose!", time: result.rows[0] });
    } catch (err) {
        console.error(err);
        res.status(500).send("Database error");
    }
});

app.listen(5000, () => {
    console.log("Backend running on port 5004");
});
