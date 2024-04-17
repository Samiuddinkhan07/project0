import { jwtTokenGenerator } from "../helpers/jwtGenerator.js";
import User from "../model/userModel.js";
import bcrypt from 'bcrypt';
import { getCollectionName } from "../db/db.js";

const userLogin = {
    path:'/api/login',
    method:"post",
    handler:async (req,res) =>{
       try {
        const {email,password} = req.body
        const User = await getCollectionName('users');
        const getUser = await User.findOne({email});
        if(!getUser){
            res.status(400).json({message:"User not found"});
            return
        }
        const {_id:id,name,username} = getUser;
        const passwordHash = getUser['password'];
        const isPasswordValid = await bcrypt.compare(password,passwordHash);
        console.log(isPasswordValid)
        if(isPasswordValid){
           const token = jwtTokenGenerator({id,name,email});
           return res.cookie('token',token).json({message:"Login Successfully"});
        }else{
            res.status(400).json({message:"Please Provide a valid Password"})
        }
       } catch (error) {
        console.log(error)
            res.status(500).json({message:"Internal Server Error"})
       }
    }
}

export default userLogin