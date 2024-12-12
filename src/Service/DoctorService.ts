import { UserInputError } from "apollo-server-express";
import Doctor from "../Models/Doctor";

class DoctorService {
    static async getDoctorById(id:any) {
        return await Doctor.findByPk(id);
    }

    static async getDoctor() {

    }

    static async newDoctorService(doctorDetails:any) {
        try{
            // const plainDoctorDetails = Object.assign({}, doctorDetails);
            // console.log(plainDoctorDetails,'doctor details')
            const doctorAdd =  await Doctor.create(doctorDetails);
            // const doctorAdd = doctorDetails
            console.log(doctorAdd,'doctor')
           
            
            if (doctorAdd) {
                console.log('11111')
                return {
                    message: 'Succcess',
                    success: true,
                    doctorDetails: doctorAdd             
                };
            }
        }catch(error){
            console.error(error,'error in server');
            if (error instanceof UserInputError) {
                throw error; 
            }
            throw new UserInputError('Error in server');
        }
    }
}

export default DoctorService;