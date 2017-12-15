import {models} from '../db'
import {map} from 'lodash'

const PostQuery = `
  extend type Query{
    postsWithChildren(post_type: String = "post", limit: Int, skip: Int, order: OrderInput): [Post]
  }
  extend type Post {
    children: [Post]
  }
`

const PostResolver = {
  Query: {
    postsWithChildren(_, {post_type, order, limit = 10, skip = 0}) {
      const orderBy = order ? [order.orderBy, order.direction] : ['menu_order', 'ASC']
      return models.Post.findAll({
        where: {
          post_type,
          post_status: 'publish',
          post_parent: 0
        },
        order: [orderBy],
        limit: limit,
        offset: skip
      })
    },
  },
  Post: {
    children: (root) => {
      return models.Post.findAll({
        where:{
          post_parent: root.dataValues.id,
          post_status: 'publish'
        },
        order: [
          ['menu_order', 'ASC']
        ]
      })
    }
  }
}


export {PostQuery, PostResolver}