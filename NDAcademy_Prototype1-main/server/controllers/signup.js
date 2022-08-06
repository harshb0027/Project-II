/*
*AUTHORS: Mathieu Theriault
*PURPOSE:Controller for our signup requests 
*VERSION: 1.0
*DATE: June 15 2022
*/

import jwt from "jsonwebtoken";
import UserModel from "../models/user.js";

//Post our user account to the database collection
export const postUser = async (req, res) => {
    try {
        const data = await UserModel.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        })
        res.send(data)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}

// Get user accounts from database collection
export const getUsers = async (req, res) => {
    try {
        const data = await UserModel.find();
        res.json(data);
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}
