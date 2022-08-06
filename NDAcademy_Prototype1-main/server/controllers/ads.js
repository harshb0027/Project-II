/*
* This will get the ads from our db that match the schema from our Model
* Author: Justin Warkus-Fortin
*/

import AdMessage from '../models/adMessage.js';

export const getAds = async (req, res) => {
    try {
        //Get our data that matches the AdMessage schema
        const data = await AdMessage.find();
        //Ensures the response is sent as JSON
        res.json(data)
    }
    catch (error) {
        //Could not find/complete the request
        res.status(500).json({ message: error.message })
    }
}