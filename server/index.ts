import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import authRouter from './routes/auth';

dotenv.config();

const app = express();
const port = process.env.PORT;
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Server is running');
});

app.use('/auth', authRouter)


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});