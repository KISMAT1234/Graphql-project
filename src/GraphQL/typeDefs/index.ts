import { gql } from 'apollo-server-express';
import { userType } from './userTypeDefs';

const typeDefs = gql`
${userType}
`
export default typeDefs