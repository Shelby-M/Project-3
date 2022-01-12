const { UserInputError, AuthenticationError } = require('apollo-server');
const Auth = require("../../utils/auth");
const Post = require('../../models/Post');
// const { authMiddleware } = require('../../utils/auth');

module.exports = {
    Mutation: {
        createComment: async (_, { postId, commentBody }, authMiddleware) => {
            const user = Auth(authMiddleware);
            if (commentBody.trim() === '') {
              throw new UserInputError('Empty comment', {
                errors: {
                  body: 'Comment body must not empty'
                }
              });
            }
                const post = await Post.findById(postId);

                if (post) {
                    post.comments.push({
                      body: commentBody,
                      username: user.username,
                      createdAt: new Date().toISOString()
                    });
                    await post.save();
                    return post;
                  } else throw new UserInputError('Post not found');
                },
                async deleteComment(_, { postId, commentId }, authMiddleware) {
                    const user = Auth(authMiddleware);
              
                    const post = await Post.findById(postId);
              
                    if (post) {
                      const commentIndex = post.comments.findIndex((c) => c.id === commentId);
              
                      if (post.comments[commentIndex].username === user.username) {
                        post.comments.splice(commentIndex, 1);
                        await post.save();
                        return post;
                      } else {
                        throw new AuthenticationError('Action not allowed');
                      }
                    } else {
                      throw new UserInputError('Post not found');
                    }
                  }
                }
              };