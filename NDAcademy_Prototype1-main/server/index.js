/*
*AUTHORS: Mathieu Theriault, Justin Wakus Fortin
*PURPOSE: Main file for server. Assign server attributes and MongoDB connection.
*VERSION:1.0
*DATE: June 15 2022
*/
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import adRoutes from './routes/ads.js';
import loginRoutes from './routes/login.js';
import signupRoutes from './routes/signup.js';
dotenv.config()

const port = process.env.PORT || 8080;
const app = express(); // Make instance of Xxpress


//Middleware
app.use(express.json()); //Allows Express server to accept JSON data 
app.use(cors());

//Routes
app.use('/login', loginRoutes);
app.use('/signup', signupRoutes);
app.use('/ads', adRoutes);

//Ensure the content type of request matches the type option
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//Establish MongoDB connection - MAKE SURE TO WHITELIST YOUR IP ON WEBSITE
//Listen on PORT 8080 for anything
mongoose.connect('mongodb+srv://AdminProject:W5BUoMP0Ia8gqUH5@cluster0.mvzejpf.mongodb.net/?retryWrites=true&w=majority')
    .then(() => { app.listen(port, console.log(`Connected do Atlas. Listening on port ${port}...`))})
    .catch(error => console.log(error.message));

