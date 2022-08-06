/*
*AUTHORS: Mathieu Theriault
*PURPOSE:Sign up path routes for Express server
*VERSION:1.0
*DATE: 15 June 2022
*/
import express from 'express';
const router = express.Router();
import { getUsers, postUser } from '../controllers/signup.js'; // Named import always include extension, otherwise it shits the bed.
import bcrypt from 'bcrypt';

// CRUDS
// EXAMPLE: http://localhost:PORT/signup/
router.post('/', postUser);

// EXAMPLE: http://localhost:PORT/signup/check
router.get('/check', (req, res) => {
    res.send('Get All API')
})

//Gets all users - WORKS
router.get('/getAll', getUsers);

//Get by ID Method - WORKS
router.get('/getOne/:id', (req, res) => {
    res.send('Get by ID API')
})

export default router;
