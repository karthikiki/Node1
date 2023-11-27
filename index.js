
import express from "express"
import dotenv from "dotenv"
import { studentsRouter } from "./Routers/students.js";
import { userRouter } from "./Routers/users.js";

// const client= await dbConnect();

dotenv.config();
const PORT  = process.env.PORT
const app = express();
//middleware
app.use(express.json());
//students routers
app.use("/students",studentsRouter) 
//users Router
app.use("/users", userRouter)

//starting server
app.listen(PORT,()=>console.log(`Server running Successfully : ${PORT}`))