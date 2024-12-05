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
      registerUser: async (_:any,__:any, { registerData }:any) => {
        console.log(registerData,'registration data')
         return await UserService.registerUser(registerData)
      }
  }
}
export default userResolver
