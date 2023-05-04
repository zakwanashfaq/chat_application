import dotenv from 'dotenv';
import express from 'express';
import authRouter from './routes/auth.js';
dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Server initialized');
});
app.use('/auth', authRouter);
app.get('/3', (req, res) => {
    res.send('3333');
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
