const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    token: String!
    createdAt: String!
  }
  type Post{
    id: ID!
    body: String!
    createdAt: String!
    username: String!
    comments: [Comment]!
    likes: [Like]!
    likeCount: Int!
    commentCount: Int!
  }
  type Comment{
    id: ID!
    username: String!
    body: String!
    createdAt: String!
  }
  type Like {
    id: ID!
    createdAt: String!
    username: String!
  }
  type Query {
    getPosts: [Post]
    getPost(postId: ID!): Post
  }
  type Content {
    newPost: Post!
  }
  type Auth {
    token: ID!
    user: User
  }
    type Mutation {
    signup(username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    createPost(body: String!): Post!
    deletePost(postId: ID!): String!
    createComment(postId: String!, body: String!): Post!
    deleteComment(postId: ID!, commentId: ID!): Post!
    likePost(postId: ID!): Post!
    }
`;

module.exports = typeDefs;
