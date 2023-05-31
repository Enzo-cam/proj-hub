import { startApollo } from "./app.js"
import { typeDefs } from "./graphql/typeDef.js"
import { resolvers } from "./graphql/resolvers.js"

startApollo(typeDefs, resolvers)
