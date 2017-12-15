import {makeExecutableSchema} from 'graphql-tools'
import {WordExpressDefinitions, WordExpressResolvers} from 'wordexpress-schema'
import {DocumentationQuery, DocumentationResolver} from './extensions/documentation'
import {PostQuery, PostResolver} from './extensions/post'
import {connectors} from './db'
import {merge} from 'lodash'
import Config from 'config'

const RootResolvers = WordExpressResolvers(connectors, Config.get('public'))
const Resolvers = merge(RootResolvers, DocumentationResolver, PostResolver)

const schema = makeExecutableSchema({
  typeDefs: [...WordExpressDefinitions, DocumentationQuery, PostQuery],
  resolvers: Resolvers
})

export default schema