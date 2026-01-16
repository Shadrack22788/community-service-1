import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import router from './routes/UserRouter.js';

dotenv.config();
const app = express();
const db = process.env.DATABASE
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json())
app.use("/api/v1", router)


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

mongoose.connect(db).then(() => {
  console.log('Database connected successfully');
}).catch((error) => { console.log(`Error is ${error}`) });