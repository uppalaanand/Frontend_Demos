//Create mini-express app
import Express from 'express'
import { UserModel } from '../models/UserModel.js';

export const userApp = Express.Router();

//REST APi routes

// 1. Create new User
userApp.post("/users", async (req, res) => {
    //get the new user details
    let newUser = req.body;
    //create user document 
    let newDoc = await UserModel(newUser);
    //save the user document in db
    await newDoc.save();
    //send response
    res.status(201).json({message : "User Created", payload : newDoc});
});

// 2. Read all users
userApp.get("/users", async (req, res) => {
    let users = await UserModel.findOne({status : true});
    res.status(200).json({message:"Users", payload : users});
});

//3. Read a user by id
userApp.get("/user/:id", async (req, res) => {
    //get the id from params
    let {id} = req.params;
    //get user by id
    let user = await UserModel.findOne({_id : id, status : true});
    if(!user) {
        return res.status(404).json({message : "user not found"});
    }
    res.status(200).json({message : "User Found", payload : user});
})

// 4. Delete a user by id
userApp.delete("/user/:id", async (req, res) => {
    let { id } = req.params;
    let user = await UserModel.findByIdAndUpdate(id, {status : false});
    if(!user) {
        return res.status(404).json({message : "user not found"});
    }
    res.status(200).json({message : "User Found", payload : user});
})