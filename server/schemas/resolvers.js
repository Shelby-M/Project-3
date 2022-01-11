const { AuthenticationError } = require("apollo-server-express");
const { User, Post } = require("../models");
const { signToken } = require("../utils/auth");


const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("post")

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
    getPosts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Post.find(params).sort({ createdAt: -1 });
    }, catch (err) {
      throw new Error(err);
    },
    getPost: async (parent, { _, postId }) => {
      return Post.findOne({ _, postId });
    }, else: {
      throw: new Error ('Post not found')
    }, catch (err) {
      throw new Error(err)
  }
      
  },
  Mutation: {
    addUser: async (parent, args) => {
      console.log(args);
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },

    createPost: async (_, {body }, context) => {
        if (context.user) {
            if (body.trim() === '') {
                throw new Error('Post body must not be empty');
              }
          const post = await Post.create({ body, username: context.user.username, createdAt: new Date().toISOString() });
  
          await Post.findByIdAndUpdate(
            { _id: context.user._id },
            { $push: { posts: post.postId } },
            { new: true }
          );
  
          return post;
        }
  
        throw new AuthenticationError('You need to be logged in!');
      },



  },
};

module.exports = resolvers;

// thoughts: async (parent, { username }) => {
//   const params = username ? { username } : {};
//   return Thought.find(params).sort({ createdAt: -1 });
// },
