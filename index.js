
import express from "express"
import dotenv from "dotenv"
import { studentsRouter } from "./Routers/students.js";
import { userRouter } from "./Routers/users.js";
import { isAuthenticated } from "./Authentication/auth.js";
import cors from "cors"


// const client= await dbConnect();

dotenv.config();
const PORT  = process.env.PORT
const app = express();
const home = `
    <h1>Welcome to Student Details API</h1>
    <br/>
    <p>GET - /students/all  (Gets All Students)</p>
    <p>GET - /students/:id  (Get requested student detail)</p>
    <p>POST - /students/add  (Add New Student Data)</p>
    <p>PUT - /students/edit/:id  (Update a student detail)</p>
     <p>DELETE - /students/delete/:id  (Delete a requested student Data)</p>
    `    

//middleware
app.use(cors());
app.use(express.json());

//Home 
app.get('/', (req, res) => res.send(home))
//students routers
app.use("/students",isAuthenticated,studentsRouter) 
//users Router
app.use("/users", userRouter)

//starting server
app.listen(PORT,()=>console.log(`Server running Successfully : ${PORT}`))