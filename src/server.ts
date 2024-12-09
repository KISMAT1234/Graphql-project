import { ApolloServer, gql } from 'apollo-server';
import sequelize from './Database/sequelizeConnection';
import dotenv from 'dotenv';
import { userResolver } from './GraphQL/resolvers/index';
import typeDefs from './GraphQL/typeDefs/index';
import { authenticate } from './Middleware/authentication.Middleware';

dotenv.config();

const PORT = process.env.PORT || 8000;


async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers: [userResolver],
    // context: ({ req, res }) => {
    //   console.log('inside context')
    //   const authHeader = req.headers.authorization
  
    //   console.log(authHeader,'header getting')
    //   if (authHeader) {
    //     const token = authHeader?.split(' ')[1]
    //     console.log(token,'token after split')

    //     if (!token) {
    //       return { user: null };
    //     }

    //     const decodedToken = authenticate(token)
    //     return { user: decodedToken };
    //   }
    //   return {user: null}

    // },

  });

  const { url } = await server.listen(PORT);
  console.log(`Server is running at ${url}`);
}

startApolloServer();




