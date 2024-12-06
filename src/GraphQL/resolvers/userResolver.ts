import { UserService } from "../../Service/UserService";

const userResolver = {
    Query: {
      getUser: async(_:any, __:any, id:any):Promise<any> => {
        return await UserService.getUserById(id);
      },

      getAllUser: async(_:any, __:any, id:any):Promise<any> => {
        return await UserService.getAllUserData();
      },

      logIn: async(_:any, __:any, id:any):Promise<any> => {
        return await UserService.getUserById(id);
      }
    },

    Mutation: {
      signUp: async (_:any, { registerData }:any) => {
        console.log(registerData,'registration data')
        console.log(registerData.email,'email')
        return await UserService.registerUser(registerData)
      }

   }
}
export default userResolver
