import DoctorService from "../../Service/DoctorService";

const doctorResolver = {
   Query:{
    //    getDoctorById: async(_:any, id:any):Promise<any> => {
    //        return await DoctorService.getDoctorById(id);
    //    },

       getDoctor: async():Promise<any> => {
           return await DoctorService.getDoctor();
       }
   },

   Mutation : {
         newDoctor: async(_:any, {doctorDetails}:any):Promise<any> => {
            console.log(doctorDetails,'insidersss')
           return await DoctorService.newDoctorService(doctorDetails);
       },

       updateDoctor: async(_:any, doctorDetails:any):Promise<any> => {
        //    return await DoctorService.updateDoctor(doctorDetails);
       },

       deleteDoctor: async(_:any, id:any):Promise<any> => {
        //    return await DoctorService.deleteDoctor(id);
       }

   }
}

export default doctorResolver