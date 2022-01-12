import React from 'react';
import {Container, Grid, Transition } from 'semantic-ui-react'
import { useQuery } from '@apollo/client';
import Auth from '../utils/auth';
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import { QUERY_POSTS } from '../utils/queries';

function Home(){
  const { data } = useQuery(QUERY_POSTS);
  
  const posts = data?.posts || [];

  const loggedIn = Auth.loggedIn();

    return (
   <Container style={{ marginTop: '3em' }}>
      <Grid.Column columns={3} textalign='center'  style={{ margin: '0', height: '100vh'
    }}>
      <Grid.Row className="page-title">
        <h1>Recent Posts</h1>
      </Grid.Row>
      <Container style={{ marginTop: '3em' }}>
        <Grid.Row>
          { loggedIn && (
            <Grid.Column>
      <PostForm />
      </Grid.Column>
          )}
      </Grid.Row>
      </Container>

      <Grid.Row style={{ marginTop: '5em' }}>
        <Transition.Group duration={500}>
         {posts &&
              posts.map(post => (
                <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
                  <PostCard post={post} />
                </Grid.Column>
              ))}

          </Transition.Group>

        </Grid.Row>
        </Grid.Column>  
</Container>
    )

}

export default Home;




















// import { Grid } from 'semantic-ui-react';
// import PostCard from '../components/PostCard';
// import PostForm from './PostForm'
// import Posts from "./Post";

//         <Grid columns={3}>
//         <Grid.Row className="page-title">
//           <h1>New Posts</h1>
//         </Grid.Row>
//         <Grid.Row>
//         {/* {
//           <Grid.Column>
//             <PostForm />
//           </Grid.Column>
//         } */}
//          <Grid columns={3} divided>
//     <Grid.Row>
//       <Grid.Column>
//         <PostCard />
//       </Grid.Column>
//       <Grid.Column>
//         <PostCard />
//       </Grid.Column>
//       <Grid.Column>
//         <PostCard />
//       </Grid.Column>
//     </Grid.Row>

//     <Grid.Row>
//     <Grid.Column>
//         <PostCard />
//       </Grid.Column>
//       <Grid.Column>
//         <PostCard />
//       </Grid.Column>
//       <Grid.Column>
//         <PostCard />
//       </Grid.Column>
//     </Grid.Row>
//   </Grid>

//       </Grid.Row>
//     </Grid>
//   );