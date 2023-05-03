import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Server initialized');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});