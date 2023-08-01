
// // const  express = require("express");
// // const fs = require("fs")
// // const path = require("path")
// // const dirName = path.join(__dirname,"timeStamps")

// // const app = express();

// // app.get("/",(req,res)=>{
// //     res.send("hey this nodejs class fulfill life ")
// // })

// // app.get("/date-time",(req,res)=>{
// //     let date=new Date();
// //     let currentTimeStamp = date.toUTCString().slice(0, -3)
// //     let content = `The updated timestamp : ${currentTimeStamp}`
// //     console.log(dirName)
// //    fs.writeFile(`${dirName}/date-time.txt`,content,(err)=>{
// //     if(err){
// //        res.send("Error is writing the file")
// //        return
// //     }
// //     res.sendFile(path.join(dirName,"date-time.txt"))
// //    })
// // })
// // app.listen(9000,()=>console.log(`Server started in localhost:9000`));

// const express = require("express")

// const app = express();

// app.get("/",(req,res)=>{
//     res.send("welcome to hall ticket booking")
// })

// app.listen(9000,()=>console.log("server is running in localhost"))


// import express from "express"
// import {client } from "./db.js";

// // const client= await dbConnect();
// const PORT = 9000;
// const app = express();
// app.use(express.json());

// app.get("/",(req,res)=>{
//     res.send("Hello Working Properly")
// })  
//  app.get("/students",async (req,res)=>{
//     try {
//         const students = await client
//         .db("guvi")
//         .collection("students")
//         .find({})
//         .toArray();
//         console.log(students)
//         if(students.length <= 0){
//             res.send(400).json({data:"user not found"})
//             return
//         }
//       res.status(200).json({data: students})  
//     } catch (error) {
//         console.log(error)
//         res.status(500).json({data:"Internal Server Error"})
//     }
//  })

// app.listen(PORT,()=>console.log(`Server running Successfully : ${PORT}`))

import express from "express"
import dotenv from "dotenv"
import { studentsRouter } from "./Routers/students.js";

// const client= await dbConnect();

dotenv.config();
const PORT  = process.env.PORT
const app = express();
//middleware
app.use(express.json());
//students routers
app.use("/students",studentsRouter)  
//starting server
app.listen(PORT,()=>console.log(`Server running Successfully : ${PORT}`))