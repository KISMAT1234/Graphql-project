import Doctor from "../Models/Doctor";

class DoctorService {
    static async getDoctorById(id:any) {
        return await Doctor.findByPk(id);
    }

    static async getDoctor() {

    }
}

export default DoctorService;