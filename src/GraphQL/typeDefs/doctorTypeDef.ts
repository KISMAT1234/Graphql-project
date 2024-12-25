import { gql } from 'apollo-server-express';

export const doctorType = gql`
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
        image:String
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
