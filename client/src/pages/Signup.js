
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import { Container, Form, Header, Grid, Button, Segment } from 'semantic-ui-react';

function Signup(props) {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        username: formState.username,
        email: formState.email,
        password: formState.password,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Container>
       <Grid textalign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='purple' textalign='center'>Signup</Header>
      <Form size="large" onSubmit={handleFormSubmit}>
        <Segment stacked>
          <Form.Input
                label="Username"
                icon="user"
                placeholder="Username.."
                name="username"
                type="text"
            onChange={handleChange}
          />
        <Form.Input
      className='field'
           label="Email"
            placeholder="Email.."
            icon="mail"
            name="email"
            type="email" 
            onChange={handleChange}
          />
        <Form.Input
            className="field"
            label="Password"
            icon="lock"
            placeholder="Password.."
            name="password"
            type="password"
            onChange={handleChange}
          />
            <Button className=" ui fluid large secondary animated submit" tabIndex="0">
          <div className="visible content">Sign Up</div>
          <div className="hidden content">
    <i className="right arrow icon"></i>
  </div>
          </Button>
          </Segment>
          </Form>
          </Grid.Column>
          </Grid>
    </Container>
  );
}

export default Signup;





// import React, {useState} from "react";
// import {Button, Form, Grid, Header, Segment} from 'semantic-ui-react';
// import { useMutation } from '@apollo/client';
// import {ADD_USER} from '../utils/mutations'
// import Auth from '../utils/auth';


// const Signup = () => {
//   const [formState, setFormState] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });
//   const [addUser, { error }] = useMutation(ADD_USER);

//   // update state based on form input changes
//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//   };

//   // submit form
//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const { data } = await addUser({
//         variables: { ...formState },
//       });

//       Auth.login(data.addUser.token);
//     } catch (e) {
//       console.error(e);
//     }
//   };

//     return (
//       <Grid textalign='center' style={{ height: '100vh' }} verticalAlign='middle'>
//       <Grid.Column style={{ maxWidth: 450 }}>
//         <Header as='h2' color='purple' textalign='center'>Sign Up </Header>

//            <Form size='large' onSubmit={handleFormSubmit}>
//         <Segment stacked>
//           <Form.Input
//             label="Username"
//             placeholder="Username.."
//             icon="user"
//             name="username"
//             type="text" 
//             value={formState.username}
//             onChange={handleChange}
//             required
//             />
            
//           <Form.Input
//             label="Email"
//             placeholder="Email.."
//             icon="mail"
//             name="email"
//             type="email" 
//             value={formState.email}
//             onChange={handleChange}
//             required
//             />
//           <Form.Input
//             label="Password"
//             placeholder="Password.."
//             icon="lock"
//             name="password"
//             type="password" 
//             value={formState.password}
//             onChange={handleChange}
//             required
//             />
//           <Button className=" ui fluid large secondary animated submit" ref={Signup} tabIndex="0">
//             <div className="visible content">Sign Up</div>
//             <div className="hidden content">
//               <i className="right arrow icon"></i>
//             </div>
//           </Button>
//       </Segment>
//         </Form>
//         {error && <div>Signup failed</div>}
//         </Grid.Column>
//   </Grid>

//     )
    

// }

// export default Signup;