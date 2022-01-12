import { gql } from '@apollo/client';


export const QUERY_POSTS = gql`
  query {
    getPosts {
      id
      body
      createdAt
      username
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;


export const GET_POST_BY_ID = gql`
 query getPost($postId: ID!) {
        getPost(postId: $postId) {
            id
            body
            username
            createdAt
            comments {
                id
                body
                username
                createdAt
            }
            commentsCount
            likes {
                id
                username
                createdAt
            }
            likesCount
        }
    }
`;


