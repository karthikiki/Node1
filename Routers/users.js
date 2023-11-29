import express from "express"
import { addUsers, generateJwtToken, getUser } from "../Controllers/users.js";
import bcrypt from "bcrypt"
const router = express.Router();

router.post("/signup", async(req,res)=>{
    try {
        const salt = await bcrypt.genSalt(10);
        const user = await getUser(req.body.email)

        if(!user){
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const hashedUser = await {...req.body,password:hashedPassword}
        const result = await addUsers(hashedUser)
        return res.status(200).json({data:{result , data:"Added Successfully"}})
        }
        res.status(400).json({data:"Given email already exist"})
    } catch (error) {
        res.status(500).json({data:"Internal server Error"});
    }
})

router.post("/login", async(req,res)=>{
    try {
        const user = await getUser(req.body.email);
        if(!user){
            return res.status(404).json({ data:"Invalid Email" })
        }
        //password
        const validPassword = await bcrypt.compare(
            req.body.password ,
             user.password
        )
         if(!validPassword){
            return res.status(400).json({data:"Invalid Password"})
         }
         const token = generateJwtToken(user._id);
         res.status(200).json({data:{
            message: "Sucessfully loggedIn",
            token : token
        }})
    } catch (error) {
        res.status(500).json({data:"Internal server Error"});
    }
})
export const userRouter = router;