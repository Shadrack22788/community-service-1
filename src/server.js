import express from 'express';
import dotenv from 'dotenv';
import mongoose  from 'mongoose';

dotenv.config();

const db = process.env.DATABASE

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

mongoose.connect(db).then(() => {
    console.log('Database connected successfully');
}).catch((error)=> {console.log(`Error is ${error}`)});