import React from "react";
import {Grid} from 'semantic-ui-react'
import PostCard from "../components/PostCard";
// import PostForm from "../components/PostForm";


function Home(){
    return (
   
      <Grid columns={3}  style={{
    }}>
      <Grid.Row className="page-title">
        <h1>Recent Posts</h1>
      </Grid.Row>
      {/* <PostForm /> */}
      <Grid.Row>
          <Grid.Column style={{ marginBottom: 20 }}>
            <PostCard />
          </Grid.Column>
        </Grid.Row>
        </Grid>

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