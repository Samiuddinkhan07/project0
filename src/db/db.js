import mongoose from "mongoose";


const InitializeConnectionWithDb = async () =>{
   const Db =  await  mongoose.connect(process.env.MONGO_URL ,{});
   return Db
}


export default InitializeConnectionWithDb;