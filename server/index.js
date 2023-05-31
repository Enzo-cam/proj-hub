import { startApollo } from "./app.js"
import { typeDefs } from "./graphql/typeDef.js"
import { resolvers } from "./graphql/resolvers.js"
import dotenv from "dotenv"
import { connectDB } from "./db.js"


dotenv.config()
connectDB()
startApollo(typeDefs, resolvers)
