const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "db",
    database: "testdb",
    password: "postgres",
    port: 5432
});

// Function to check the database connection
const testConnection = async () => {
    try {
        const result = await pool.query("SELECT NOW()");
        console.log("Database connected at:", result.rows[0].now);
    } catch (error) {
        console.error("Database connection error:", error);
    }
};

testConnection();

module.exports = pool;
