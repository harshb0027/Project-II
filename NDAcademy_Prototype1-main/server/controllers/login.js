/*
*AUTHORS: Mathieu Theriault
*PURPOSE:Controller for our login requests 
*VERSION: 1.0
*DATE: June 15 2022
*/

import jwt from "jsonwebtoken";
import UserModel from "../models/user.js";

//Get user account from database. Confirms if it exists or not.
export const getSingleUser = async (req, res) => {
    const user = await UserModel.findOne({
        email: req.body.email,
        password: req.body.password
    });

    if (user) {
        //ADD JWT signage.
        const token = jwt.sign({})
        return res.json({ status: 'OK', user: true })
    } else {
        return res.json({ status: 'error', user: false })
    }
}