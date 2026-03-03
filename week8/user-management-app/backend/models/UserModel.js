import mongoose from "mongoose";

//Create User Schema with validations
const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Username is required"],
    },
    email : {
        type : String,
        required : [true, "Email is required"],
        unique : [true, "Email already registered"]
    },
    dob : {
        type : Date,
        required : [true, "Date of birth is required"]
    },
    mobileNumber : {
        type : Number
    },
    status : {
        type : Boolean,
        default : true
    }
},{ timestamps : true,
    versionKey : false,
    strict : 'throw'
 });

//Create UserModel for above schema

export const UserModel = new mongoose.model("users", UserSchema);