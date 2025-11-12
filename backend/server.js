import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pingRouter from './routes/ping.js';
import accountsRouter from './routes/accounts.js';

dotenv.config();

const app = express();
app.use(cors({
    origin: process.env.ALLOWED_ORIGIN || 'http://localhost:3000',
    methods: ['GET','POST','PUT','DELETE','OPTIONS']
}));
app.use(express.json());

app.use('/ping', pingRouter);
app.use('/accounts', accountsRouter);

app.get('/', (req, res) => res.send({ ok: true }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));

