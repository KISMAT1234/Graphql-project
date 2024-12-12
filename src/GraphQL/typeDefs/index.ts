import { gql } from 'apollo-server-express';
import { userType } from './userTypeDefs';
import { doctorType } from './doctorTypeDef';

const typeDefs = gql`
${userType}
${doctorType}
`
export default typeDefs