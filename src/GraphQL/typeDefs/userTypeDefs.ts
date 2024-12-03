import { gql } from 'apollo-server-express';

export const userType = gql`

type User {
    id: ID!
    name: String!
    email: String!
}

input InputUser{
    name: String!
    email: String!
    password: String!
}

type Query {
  getUser(id: ID!): User!
  getAllUser: [User!]!
}

type Mutation {
  registerUser(registerData: InputUser!): User
}

`

