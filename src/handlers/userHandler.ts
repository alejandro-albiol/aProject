import { SaveUser } from "../models/userModel.js";

export async function saveUserHandler(data:any){
    const result = await SaveUser(data);
    return result.rows;
}