import { gql } from 'apollo-server-express';

export const userType = gql`
type Query {
  user: String
}

`

