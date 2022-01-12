import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            id
            username
            password
            createdAt
            token
        }
    }
`;

export const ADD_USER = gql`
  mutation addUser(
        $username: String!
        $email: String!
        $password: String!
    ) {
        addUser(
            addUserInput: {
                username: $username
                email: $email
                password: $password
            }
        ) {
            id
            username
            email
            createdAt
            token
        }
    }
`;

export const CREATE_POST = gql`
mutation createPost($body: String!) {
        createPost(body: $body) {
            id
            body
            username
            createdAt
            likes {
                id
                username
                createdAt
            }
            likesCount
            comments {
                id
                body
                username
                createdAt
            }
            commentsCount
        }
    }
`;

export const LIKE_POST = gql`
    mutation likePost($postId: ID!) {
        likePost(postId: $postId) {
            id
            likes {
                id
                username
                createdAt
            }
            likesCount
        }
    }
`;

export const DELETE_POST = gql`
mutation deletePost($postId: ID!){
  deletePost(postId: $postId)
}
`;

export const CREATE_COMMENT = gql`
mutation createComment($postId: ID!, $commentBody: String!) {
  createComment(postId: $postId, commentBody: $commentBody) {
    id
    comments {
    id
    username
    body
      createdAt
            }
            commentsCount
        }
    }
`;

export const DELETE_COMMENT = gql`
  mutation deleteComment($postId: ID!, $commentId: ID!) {
    deleteComment(postId: $postId, commentId: $commentId) {
      id
      comments {
        id
        username
        createdAt
        body
      }
      commentCount
    }
  }
`;

export const SUBMIT_COMMENT= gql`
  mutation($postId: String!, $body: String!) {
    createComment(postId: $postId, body: $body) {
      id
      comments {
        id
        body
        createdAt
        username
      }
      commentCount
    }
  }
`;




