import React from "react";
import {Container, Grid} from 'semantic-ui-react'
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";


function Home(){
    return (
   <Container style={{ marginTop: '3em' }}>
      <Grid.Column columns={3} TextAlign='center'  style={{ margin: '0', height: '100vh'
    }}>
      <Grid.Row className="page-title">
        <h1>Recent Posts</h1>
      </Grid.Row>
      <Container style={{ marginTop: '3em' }}>
      <PostForm />
      </Container>
      <Grid.Row style={{ marginTop: '5em' }}>
          <Grid.Column style={{ marginBottom: 20 }}>
            <PostCard />
          </Grid.Column>
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