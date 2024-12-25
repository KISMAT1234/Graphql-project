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
    data: User!
    success: Boolean!
    message:String!  
}

type UsersResponse {
    data: [User]! 
    success: Boolean!
    message: String!
  }

type Query {
  getUser(id: ID!): User!
  getAllUser: UsersResponse!
}

type Mutation {
  signUp(registerData: SignUpUser!): UsersResponse!
  logIn(LoginData: LoginData!): LogIn!

}

`

