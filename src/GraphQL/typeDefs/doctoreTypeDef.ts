import { gql } from 'apollo-server-express';

export const userType = gql`
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


    type Query {
        getDoctor(id:ID!):Doctor!
        getAllDoctor:[Doctor!]!
    }

    type Mutation {
        newDoctor(doctorDetails:DoctorDetails!):Doctor!
        updateDoctor(doctorDetails:DoctorDetails!):Doctor!
        deleteDoctor(id:ID!):String!
    }

`
