import express from 'express'
import {graphqlExpress, graphiqlExpress} from 'apollo-server-express'
import bodyParser from 'body-parser'
import graphqlSchema from './schema'

const PORT = 4000
const app = express()
app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress(req => {
    return({
      schema: graphqlSchema
    })
  })
)

app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql',
  })
);

app.listen(PORT, () => {
  console.log(`wordexpress server is now running on port ${PORT}`)
})