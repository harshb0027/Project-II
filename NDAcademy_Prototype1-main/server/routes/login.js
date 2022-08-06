/*
*AUTHORS: Mathieu Theriault
*PURPOSE: Login path routes for Express server
*VERSION:1.0
*DATE: June 19, 2022
*/
import express from 'express';
import { getSingleUser } from '../controllers/login.js';
const router = express.Router();

//CRUDS
//Used to confirm user exists
router.post('/', getSingleUser)

export default router;
