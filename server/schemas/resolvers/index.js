const postsResolvers = require('../resolvers/post');
const commentsResolvers = require('../resolvers/comments');
const usersResolvers = require('../resolvers/user');

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
  };

