import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from './routes/index.js';
import bodyParser from 'body-parser';


dotenv.config();
const app = express();
const db = process.env.DATABASE
console.log(db)
const PORT = process.env.PORT;
app.use(bodyParser.json())
app.use("/api/v1", router)


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

mongoose
  .connect(db)
  .then(() => {
    console.log('Database connected successfully');
  }).catch((error) => { console.log(`Error is ${error}`) });


