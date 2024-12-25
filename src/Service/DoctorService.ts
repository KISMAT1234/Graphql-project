import { UserInputError } from "apollo-server-express";
import Doctor from "../Models/Doctor";
import uploadImage from "../Utils/uploadImage";

class DoctorService {
    static async getDoctorById(id:any) {
        try{
            const allDoctorData = await Doctor.findByPk(id);
            return {
                message: 'Login successful',
                success:true,
                userDetails: allDoctorData            
            };
        }catch (error){
            console.error(error,'error in server');
            throw new UserInputError('Error in backend');
        }
    }

    static async getDoctor() {
        try{
            const allDoctorData = await Doctor.findAll();
            return {
                message: 'Data get successful',
                success:true,
                userDetails: allDoctorData            
            };
        }catch (error){
            console.error(error,'error in server');
            throw new UserInputError('Error in backend');
        }
    }

    static async newDoctorService(doctorDetails:any) {
        try{
            // const plainDoctorDetails = Object.assign({}, doctorDetails);
            // console.log(plainDoctorDetails,'doctor details')
            console.log('ins service')
            const { image }: any = doctorDetails
            // console.log(image,'file details')
            // console.log(image.extension,'extension')
            // console.log(image.base64,'base64')
            if (image) {
               const filePath = await uploadImage({
                 fileName: `${Date.now()}.jpeg`,
                 filePath: `generalSettings`,
                 base64: image,
               })
               doctorDetails.image = filePath
           }
            //  const doctorAdd =  await Doctor.create(doctorDetails);
            // console.log(doctorAdd,'doctor')

           
            
            // if (doctorAdd) {
            //     console.log('11111')
                return {
                    message: 'Succcess',
                    success: true,
                    // doctorDetails: doctorAdd            
                    doctorDetails: doctorDetails           
                };
            // }
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