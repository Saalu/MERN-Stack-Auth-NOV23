
import express from "express";
import mongoose from "mongoose";
import userRoutes from './routes/userRoutes.js'
import employeeRoutes from './routes/employeeRoutes.js'
import cookieParser from "cookie-parser";
const app = express();
import dotenv from 'dotenv'
dotenv.config()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use('/users',userRoutes)
app.use('/users/emp',employeeRoutes)

const PORT = process.env.PORT || 5000
const mongoURI = process.env.MONGODB_URI

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});