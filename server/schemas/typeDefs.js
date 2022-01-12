const { gql } = require("apollo-server-express");

const typeDefs = gql`
 type Post{
    id: ID!
    body: String!
    username: String!
    createdAt: String!
    comments: [Comment]!
    likes: [Like]!
    commentsCount: Int!
    likesCount: Int!
  }
  type Comment{
    id: ID!
    body: String!
    username: String!
    createdAt: String!
  }
  type Like {
    id: ID!
    createdAt: String!
    username: String!
  }
  type User {
    id: ID!
    username: String!
    email: String!
    createdAt: String!
    token: String!
  }
  type Query {
    getPosts: [Post]
    getPost(postId: ID!): Post
    getUsers: [User]
  }
  input SignupInput {
        username: String!
        email: String!
        password: String!
    }
    type Mutation {
    signup(signupInput: SignupInput): User!
    login(username: String!, password: String!): User!
    createPost(body: String!): Post!
    deletePost(postId: ID!): String!
    createComment(postId: String!, body: String!): Post!
    deleteComment(postId: ID!, commentId: ID!): Post!
    likePost(postId: ID!): Post!
    }
`;

module.exports = typeDefs;
