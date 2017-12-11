import {makeExecutableSchema} from 'graphql-tools'
import {WordExpressDefinitions, WordExpressDatabase, WordExpressResolvers} from 'wordexpress-schema'
import Config from 'config'

const publicSettings = Config.get('public')
const privateSettings = Config.get('private')
const settings = {publicSettings, privateSettings}
const Database = new WordExpressDatabase(settings)
const Connectors = Database.connectors
const Resolvers = WordExpressResolvers(Database.connectors, publicSettings)

const schema = makeExecutableSchema({
  typeDefs: WordExpressDefinitions,
  resolvers: Resolvers
})

export default schema