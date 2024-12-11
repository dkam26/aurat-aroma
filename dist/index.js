"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pg_1 = require("pg");
const app = (0, express_1.default)();
const PORT = 3000;
// Middleware to parse JSON
app.use(express_1.default.json());
const pool = new pg_1.Pool({
    connectionString: process.env.DATABASE_URL,
});
pool.connect()
    .then(() => console.log("Connected to Postgres!"))
    .catch((err) => console.error("Postgres connection error:", err));
// Basic route
app.get('/', (req, res) => {
    res.send('Welcome to the Aurat Aroma API!');
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
