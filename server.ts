import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

const PORT = 5000
async function startApolloServer() {

    const server = new ApolloServer({
    
    })

    await server.start();
    server.applyMiddleware({ app })

    app.listen(5000 , () => {
        console.log(`Server is running at http://localhost:${PORT}${server.graphqlPath}`)
    })
}
startApolloServer();