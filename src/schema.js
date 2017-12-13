import {makeExecutableSchema} from 'graphql-tools'
import {WordExpressDefinitions, WordExpressResolvers} from 'wordexpress-schema'
import {DocumentationQuery, DocumentationResolver} from './extensions/documentation'
import {connectors} from './db'
import {merge} from 'lodash'
import Config from 'config'

const RootResolvers = WordExpressResolvers(connectors, Config.get('public'))
const Resolvers = merge(RootResolvers, DocumentationResolver)

const schema = makeExecutableSchema({
  typeDefs: [...WordExpressDefinitions, DocumentationQuery],
  resolvers: Resolvers
})

export default schema