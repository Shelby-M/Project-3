const postsResolvers = require('./posts');
const commentsResolvers = require('./comments');
const usersResolvers = require('./users');

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
