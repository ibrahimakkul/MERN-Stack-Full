import express from 'express';
import mongoose from 'mongoose';
import blogRouter from './routes/blog-route';
import router from './routes/user-route';
import cors from 'cors';
const app=express();
app.use(cors());
app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog",blogRouter);

const DB = 'mongodb+srv://ibrahim:123@node.suiep.mongodb.net/proje?retryWrites=true&w=majority'

// connect to database



await mongoose.connect(DB)
.then(()=>app.listen(5000))
.then(()=>console.log(`success `))
.catch((error)=>console.log(error))



