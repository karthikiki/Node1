import { MongoClient } from "mongodb";
import Obj from "mongodb"

const MongoURL = "mongodb+srv://karthi:karthick15@cluster0.tkmk9sb.mongodb.net/guvi"
async function dbConnect(){
  const client = new MongoClient(MongoURL);
  await client.connect()
  console.log("MongoDB is connected succesfully")
  return client
}
export var ObjectId = Obj.ObjectId
export const client = await dbConnect();