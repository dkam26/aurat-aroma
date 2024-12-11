import express, { Request, Response } from 'express';
import { Pool } from "pg";

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });


pool.connect()
.then(() => console.log("Connected to Postgres!"))
.catch((err: any) => console.error("Postgres connection error:", err));

// Basic route
app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the Aurat Aroma API!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});