import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import InitializeConnectionWithDb from './db/db.js';
import routes from './routes/routes.js';
import cookieParser from "cookie-parser";

dotenv.config()

const app = express();
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({
    extended:true
}));

const PORT = process.env.PORT || 5000

routes.forEach((route) =>{
    app[route.method](route.path,route.handler)
})

// Db connection
InitializeConnectionWithDb().then(() =>{
    console.log("DB Connected")
    app.listen(PORT,() =>{
        console.log('The server has been started and running on the PORT http://localhost:'+ PORT + '')
    })
})


