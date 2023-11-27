import { client } from "../db.js";

export function addUsers(userInfo){
    return client
    .db("guvi")
    .collection("users")
    .insertOne("userInfo")
}
export function getUser(userEmail){
    return client
    .db("guvi")
    .collection("users")
    .findOne({email: userEmail})
}