import jwt from 'jsonwebtoken';

// sets the token
const jwtTokenGenerator  = (userData) =>{
    const {name,email} = userData
    const token = jwt.sign({name,email},process.env.SECRET_KEY,{expiresIn:"1day"});
    return token;
}

// verifys the user token
const jwtTokenVerifyer = (req,res,next) =>{
    const token  = jwt.verify(user,process.env.SECRET_KEY)
    return token;
}

export  {jwtTokenGenerator,jwtTokenVerifyer}