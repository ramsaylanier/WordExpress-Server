import {models} from '../db'

const DocumentationQuery = `
  extend type Query {
    documents: [Post]
  }
`

const DocumentationResolver = {
  Query: {
    documents: () => {
      return models.Post.findAll({
        where: {
          post_type: 'documentation'
        }
      })
    }
  }
}


export {DocumentationQuery, DocumentationResolver}