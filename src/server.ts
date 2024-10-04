import { ApolloServer, gql } from 'apollo-server';
import sequelize from './Database/sequelizeConnection';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 8000;

const typeDefs = gql`
  type Query {
    hello: String
    greet(name: String!): String
  }
`;

// Step 3: Define resolvers
const resolvers = {
  Query: {
    hello: () => 'Hello, world!',
    greet: (_: any, args: { name: string }) => `Hello, ${args.name}!`,
  },
};

async function startApolloServer() {
  const server = new ApolloServer({
    // typeDefs,
    // resolvers: [userResolver, postResolver, commentResolver, replyResolver],
    // context: ({ req }) => {
    //   return { user: req.user };
    // },
    typeDefs,
    resolvers,
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



