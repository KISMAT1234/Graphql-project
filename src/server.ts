import { ApolloServer, gql } from 'apollo-server';
import sequelize from './Database/sequelizeConnection';
import dotenv from 'dotenv';
import { userResolver } from './GraphQL/resolvers/index';
import typeDefs from './GraphQL/typeDefs/index';

dotenv.config();

const PORT = process.env.PORT || 8000;


async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers: [userResolver],
    // context: ({ req }) => {
    //   return { user: req.user };
    // },

  });

  const { url } = await server.listen(PORT);
  console.log(`Server is running at ${url}`);
}

startApolloServer();

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection successful!!');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });



