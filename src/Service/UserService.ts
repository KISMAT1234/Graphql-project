import { UserInputError } from "apollo-server-express";
import User from "../Models/User";

export class UserService {

    static async registerUserService(data:any){
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
            console.error(error,'error in signup');
            throw new UserInputError('Error fetching user by ID');
        }
    }

    static async logInUserService(logInDetails:any) {
        try{
            // console.log(logInDetails.LoginData.password)
            const { email, password } = logInDetails.LoginData
            console.log(email,'email in resolvers')
            const oneUserData = await User.findOne({
                where:{
                    email:email,
                    password:password
                }
            });
            console.log(oneUserData,'one user data')
            if (oneUserData) {
                return {
                    message: 'Login successful',
                    userDetails: oneUserData                };
            } else {
                throw new UserInputError('Please provide correct username and password', {
                    invalidArgs: ['email', 'password'], // Optionally add extra info to help with debugging
                });
            }
        }catch(error){
            console.error(error,'error in signup ');
            if (error instanceof UserInputError) {
                throw error; 
            }
            throw new UserInputError('Error in server');
        }
    }



}