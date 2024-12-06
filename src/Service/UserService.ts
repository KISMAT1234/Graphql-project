import { UserInputError } from "apollo-server-express";
import User from "../Models/User";

export class UserService {

    static async registerUser(data:any){
        console.log(data,'data here')
        const newUser = await User.create(data);
        console.log(newUser,'after save')
        return newUser;
         
    }
    static async getUserById(id:number) {
        try{

            const oneUserData = await User.findByPk(id);
            console.log(oneUserData,'one user data')
            return oneUserData;
        }catch (error){
            console.error(error,'error in fetching user id ');
            throw new UserInputError('Error fetching user by ID');
        }
    }

    static async getAllUserData() {
        try{
            console.log("Inside all data")
            const oneUserData = await User.findAll();
            console.log(oneUserData,'all user data')
            return oneUserData;
        }catch (error){
            console.error(error,'error in fetching user id ');
            throw new UserInputError('Error fetching user by ID');
        }
    }



}