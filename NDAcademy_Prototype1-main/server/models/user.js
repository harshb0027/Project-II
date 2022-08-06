/*
*AUTHORS: Mathieu Theriault
*PURPOSE: Schema is our data structure definition for our users.
*VERSION: 1.0
*DATE: June 15 2022
*/
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true, unique: true }, //email unique so it creates an index and no duplicate accounts
	password: { type: String, required: true },
},
{ 
	collection: 'TestUsers' //Collection defined in MongoDB Atlas
});

const UserModel = mongoose.model('UserData', userSchema);

export default UserModel;
