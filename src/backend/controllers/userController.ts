import { getUsers, SaveUser, getUserById, deleteUserById } from "../models/userModel.js";
import { User } from "../types/user.js";

export async function newUser(data:User):Promise<string>{
    try {
        const result = await SaveUser(data);
        return result;
    } catch (error:any){
        if (error.code === "23505") {
            // El detail viene en formato: "Key (columna)=(valor) already exists."
            const columnMatch = error.detail.match(/Key \((.*?)\)=/);
            const columnName = columnMatch ? columnMatch[1] : 'campo';
            return `El ${columnName} ya existe en la base de datos`;
        }
        return error;
    }
    
}

export async function showAllUsers():Promise<string>{
    try {
        const result = await getUsers();
        return result;
    } catch (error:any){
        return error;
    }
    
}

export async function showUser(id: number): Promise<string> {
    try {
        const result = await getUserById(id);
        if (result.rows.length === 0) {
            return `Usuario con ID ${id} no encontrado`;
        }
        return result.rows[0];
    } catch (error: any) {
        return error;
    }
}

export async function deleteUser(id:number):Promise<any>{
    const result = deleteUserById(id);
    return result;
}