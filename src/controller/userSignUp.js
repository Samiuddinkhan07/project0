import {jwtTokenGenerator}  from "../helpers/jwtGenerator.js";
import User from "../model/userModel.js";
import bcrypt from 'bcrypt';


const userSignUp = {
    path: '/api/signup',
    method: 'post',
    handler: async (req, res) => {
        try {
            const { name, password, email,username } = req.body;
            if (!name || !password || !email || !username) {
                return res.status(400).json({message:"Please Provide the values"});   
        }
        const saltRounds  = 10;
        const hasPassword = await bcrypt.hash(password,saltRounds);

        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({messgae:"Cant create a user with the same email"});
            
        }

        const existingUsername =  await User.findOne({username});
        if(existingUsername){
            return res.status(400).json({message:"A user already exists with this username"});
        }
        const user = new User({
            name,
            password:hasPassword,
            email
        });
        const token = jwtTokenGenerator(req.body)
        await user.save();
        return res.cookie('token',token).json({message:"Account has been sucessfully created"});

        } catch (error) {
            console.log(error)
            return res.status(500).json({messgae:"cant create  account"})
        }

    }
}

export default userSignUp;