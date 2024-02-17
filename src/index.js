import express from 'express';
import cors from 'cors';
import router from './route/index.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();

app.use(express.json());
app.use('/api', router);
app.use(cors({ credentials: true, origin: '*' }));

dotenv.config();
mongoose.connect(process.env.MONGO_URI, {});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
