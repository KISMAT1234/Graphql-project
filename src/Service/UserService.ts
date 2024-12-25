import { UserInputError } from "apollo-server-express";
import User from "../Models/User";

export class UserService {

    static async registerUserService(data:any){
        console.log('beforeeeee')
        const newUser = await User.create(data);
        console.log(newUser,'new user')
        return {
            message: 'Signup successful',
            success:true,
            data: newUser            
        };
         
    }
    static async getUserById(id:number) {
        try{
            const oneUserData = await User.findByPk(id);
            if(!oneUserData){
                return {
                    message: 'Data not found',
                    success:true,
                    data: []           
                };
            }
            console.log(oneUserData,'one user data')
            return {
                message: 'Data get successful',
                success:true,
                data: oneUserData            
            };
        }catch (error){
            throw new UserInputError('Error fetching user by ID');
        }
    }

    static async getAllUserData() {
        try{
            const oneUserData = await User.findAll({
                attributes: ['id', 'name', 'email'],
                raw: true,
            });
            console.log(oneUserData,'dataaaaa')
            if(!oneUserData){
                return {
                    message: 'Data not found',
                    success:true,
                    data: []           
                };
            }
            return {
                message: 'Data get successful',
                success:true,
                data: oneUserData            
            };
        }catch (error){
            console.error(error,'error in server');
            throw new UserInputError('Error in backend');
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
                    success:true,
                    data: oneUserData           
                };
            } else {
                throw new UserInputError('Please provide correct username and password', {
                    invalidArgs: ['email', 'password'],
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

    static async updateUserService(id:number,{data}:any) {
           try{
               
           }
           catch(error){
            console.error(error,'error in signup ');
            if (error instanceof UserInputError) {
                throw error; 
            }
            throw new UserInputError('Error in server');
        }
    }



}