import jwt from 'jsonwebtoken';

// sets the token
const jwtTokenGenerator  = (userData) =>{
    const {name,email,id} = userData
    const token = jwt.sign({name,email},process.env.SECRET_KEY,{expiresIn:"1day"});
    return token;
}

// verifys the user token
const jwtTokenVerifyer = (userToken) =>{
    const token  = jwt.verify(userToken,process.env.SECRET_KEY)
    return token;
}

export  {jwtTokenGenerator,jwtTokenVerifyer}