import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import authRouter from './routes/auth/auth';
import chatRouter from './routes/chat/chat';

dotenv.config();

const app = express();
const port = process.env.PORT;
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Server is running');
});

app.use('/api/auth', authRouter);
app.use('/api/chat', chatRouter);


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});