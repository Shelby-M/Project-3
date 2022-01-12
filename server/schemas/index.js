const postsResolvers = require('../schemas/resolvers/post');
const commentsResolvers = require('../schemas/resolvers/comments');
const usersResolvers = require('../schemas/resolvers/user');

module.exports = {
    Post: {
        commentsCount: parent => parent.comments.length,
        likesCount: parent => parent.likes.length,
    },
    Query: {
        ...postsResolvers.Query,
        ...usersResolvers.Query,
    },
    Mutation: {
        ...postsResolvers.Mutation,
        ...usersResolvers.Mutation,
        ...commentsResolvers.Mutation,
    },
    Content: {
      ...postsResolvers.Content
    }
  };