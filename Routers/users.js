import express from "express"
import { getUser } from "../Controllers/users.js";
import bcrypt from "bcrypt"
const router = express.Router();

router.post("/signup", async(req,res)=>{
    try {
        const salt = await bcrypt.genSalt(10);
        const user = await getUser(req.body.email)
        if(!user){
             //logic
             const hashedPassword = await bcrypt.hash(req.body.password, salt);
             const hashedUser = await{...req.body,password:hashedPassword}
             const result = await addUsers(hashedUser)
             return res.status(200).json({result,data:user.password})
            }
        res.status(400).json({data:"Given email already exist"})
    } catch (error) {
        res.status(500).json({data:"Internal server Error"});
    }
})
export const userRouter = router;