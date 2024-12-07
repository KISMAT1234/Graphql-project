import { UserService } from "../../Service/UserService";

const userResolver = {
    Query: {
      getUser: async(_:any, __:any, id:any):Promise<any> => {
        return await UserService.getUserById(id);
      },

      getAllUser: async(_:any, __:any, id:any):Promise<any> => {
        return await UserService.getAllUserData();
      },

      
    },

    Mutation: {
      signUp: async (_:any, { registerData }:any) => {
        console.log(registerData,'registration data')
        console.log(registerData.email,'email')
        return await UserService.registerUserService(registerData)
      },

      logIn: async(_:any, logInDetails:any):Promise<any> => {
        console.log(logInDetails,'login  details in resolvers')
        return await UserService.logInUserService(logInDetails);
      }

   }
}
export default userResolver
