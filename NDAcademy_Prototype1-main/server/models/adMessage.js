/*
* Defining the adSchema that will be used as our model when completing HTTP requests
* Author: Justin Warkus-Fortin
*/

import mongoose from 'mongoose';

//Schema for our ads
const adSchema = new mongoose.Schema({
    id: {type: String},
    courseOffered: {type:String},
    description: {type:String},
    creditType: {type:String},
    companyOffering: {type:String},
    image: {type:String,},
    datePosted: {type:Date}
},
{
    collection: 'TestAds' 
});

//Creating an AdMessage to export for our controller
const AdMessage = mongoose.model('AdMessage', adSchema);

export default AdMessage;