import express from 'express'
import {ApolloServer} from 'apollo-server'
import {WordExpressDefinitions, WordExpressResolvers} from 'wordexpress-schema'
import {connectors} from './db'
import {DocumentationQuery, DocumentationResolver} from './extensions/documentation'
import {PostQuery, PostResolver} from './extensions/post'
import merge from 'lodash.merge'
import Config from 'config'

const PORT = 4000
const app = express()

const RootResolvers = WordExpressResolvers(connectors, Config.get('public'))
const Resolvers = merge(RootResolvers, DocumentationResolver, PostResolver)

const server = new ApolloServer({
  typeDefs: [...WordExpressDefinitions, DocumentationQuery, PostQuery],
  resolvers: Resolvers
})

server.applyMiddleware({app})

app.listen({port: PORT}, () => {
  console.log(`wordexpress server is now running on port ${PORT}`)
})