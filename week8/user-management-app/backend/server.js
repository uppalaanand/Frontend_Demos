import Express from 'express'
import { connect } from 'mongoose';
import { config } from 'dotenv';
import { userApp } from './APIs/userApi.js';

config();

const app = Express();

app.use(Express.json());


async function connectDB() {
    try {
        await connect(`${process.env.MONGO_URI}`);
        console.log("Moongodb is connected");

        app.listen(process.env.PORT, () => {
            console.log(`Server is running in PORT ${process.env.PORT}`);
        })
    }catch(err) {
        console,log("Error is", err);
    }
}
connectDB();

//Routes
app.use("/user-api", userApp);
// app.get("/", (req, res) => {
//     res.json({message:"Hello World"})
// })

//error handler product by ObjectId
function errorHandler(err, req, res, next) {
    res.json({message: "error", reason: err.message})
}
app.use(errorHandler);

//Create http Server
//Add body parser middleware
//forward request to userapi if path starts with /api/users
//connect to db
//add error handling middleware