import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import http from 'http'


export async function startApollo(typeDefs, resolvers) {
  const app = express();
  const httpServer = http.createServer(app)

  // En GRAPH siempre se definen dos cosas: tipos de datos y las funciones que se van a ejecutar con esos tipos.
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  // Antes de hacer uso del middleware el servidor se debe inicializar.
  await server.start();

  // Vamos a pasar el servidor que ejecutará el middleware
  app.use("/graphql", cors(), express.json(), expressMiddleware(server));
  
  await new Promise(resolve => httpServer.listen({
    port: 5050
  }, resolve))
  console.log('server is running')

}
