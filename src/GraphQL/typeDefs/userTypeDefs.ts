import { gql } from 'apollo-server-express';

export const userType = gql`

type User {
    id: ID!
    name: String!
    email: String!
}

input SignUpUser{
    name: String!
    email: String!
    password: String!
}

input LoginData{
    email: String!
    password: String!
}

type LogIn{
    userDetails: User!
    message:String!  
}

type Query {
  getUser(id: ID!): User!
  getAllUser: [User!]!
}

type Mutation {
  signUp(registerData: SignUpUser!): User!
  logIn(LoginData: LoginData!): LogIn!

}

`

