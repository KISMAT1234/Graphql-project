import DoctorService from "../../Service/DoctorService";

const doctorResolver = {
   Query:{
       getDoctorById: async(_:any, id:any):Promise<any> => {
           return await DoctorService.getDoctorById(id);
       },

       getDoctor: async():Promise<any> => {
           return await DoctorService.getDoctor();
       }
   },

   Mutation : {

   }
}

export default doctorResolver