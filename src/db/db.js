import mongoose from "mongoose";

let Db
const InitializeConnectionWithDb = async () =>{
   Db =  await  mongoose.connect(process.env.MONGO_URL ,{});
   return Db
}

export const getCollectionName = (collectionName) =>{
   const collection = Db.connection.db.collection(collectionName);
   return collection
}


export default InitializeConnectionWithDb;