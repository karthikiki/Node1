import { MongoClient } from "mongodb";
import Obj from "mongodb"


const MongoURL = "mongodb+srv://karthi:Karthick123@cluster0.tkmk9sb.mongodb.net/?retryWrites=true&w=majority"
// const MongoURL = "mongodb://127.0.0.1:27017"
async function dbConnect(){
  const client = new MongoClient(MongoURL);
  await client.connect()
  console.log("MongoDB is connected succesfully")
  return client
}
export var ObjectId = Obj.ObjectId
export const client = await dbConnect();    