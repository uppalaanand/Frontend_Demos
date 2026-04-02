import Express from 'express'
import { connect } from 'mongoose';
import { config } from 'dotenv';
import { userApp } from './APIs/userApi.js';
import cors from 'cors';

config();

//Create http Server
const app = Express();
app.use(cors({
  origin : ["http://localhost:5173"]
}));
//Add body parser middleware
app.use(Express.json());

//connect to db
async function connectDB() {
    try {
        await connect(`${process.env.MONGO_URI}`);
        console.log("Moongodb is connected");

        // app.listen(process.env.PORT, () => {
        //     console.log(`Server is running in PORT ${process.env.PORT}`);
        // })
    }catch(err) {
        console,log("Error is", err);
    }
}
connectDB();

//Routes
//forward request to userapi if path starts with /api/users
app.use("/user-api", userApp);

//error handler product by ObjectId
function errorHandler(err, req, res, next) {
    res.json({message: "error", reason: err.message})
}
app.use(errorHandler);

app.use((err, req, res, next) => {
  // Mongoose validation error
  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "Validation failed",
      errors: err.errors,
    });
  }
  // Invalid ObjectId
  if (err.name === "CastError") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  // Duplicate key
  if (err.code === 11000) {
    return res.status(409).json({
      message: "Duplicate field value",
    });
  }
  res.status(500).json({
    message: "Internal Server Error",
  });
});

export default app;