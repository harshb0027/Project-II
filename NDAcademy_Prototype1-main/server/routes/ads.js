/*
* Defining our router for getting the ads
* Author: Justin Warkus-Fortin
*/
import express from 'express'
import { getAds } from '../controllers/ads.js' // USE .js when importing named MODULES, otherwise it freaks out

const router = express.Router();

//Handle the get request at /ads
router.get('/', getAds);

export default router;