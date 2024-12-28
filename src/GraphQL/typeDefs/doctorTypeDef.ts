import { gql } from 'apollo-server-express';

export const doctorType = gql`

    enum Extension {
        jpg
        png
        gif
        svg
        jpeg
        heic
    }

    type Doctor {
        id:ID!
        doctorname:String!
        doctorEmail:String!
        doctorPassword:String!
        experience:Int!
        fees:Float!
        aboutme:String
        speciality:String
        education:String
        address:String
        image:String
    }

    input ImageInput {
       base64: String!
       extension: Extension!
    }

    input DoctorDetails{
        doctorname:String!
        doctorEmail:String!
        doctorPassword:String!
        experience:Int!
        fees:Float!
        aboutme:String
        speciality:String
        education:String
        address:String
        image:ImageInput
    }

    type DoctorResponse{
        message:String!
        success:Boolean!
        data:Doctor!
    }

    type Query {
        getDoctor(id:ID!):DoctorResponse!
        getAllDoctor:DoctorResponse!
    }


    type Mutation {
        newDoctor(doctorDetails:DoctorDetails!):DoctorResponse
        updateDoctor(doctorDetails:DoctorDetails!):Doctor!
        deleteDoctor(id:ID!):String!
    }

`
