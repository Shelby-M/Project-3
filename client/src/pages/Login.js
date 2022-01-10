import React from 'react';

import {Button, Form, Grid, Header, Segment} from 'semantic-ui-react'




function Login(){
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='purple' textAlign='center'>Login </Header>

           <Form size='large'>
        <Segment stacked>
          <Form.Input
          className="field"
            label="Username"
            icon="user"
            placeholder="Username.."
            name="username"
            type="text"
            // value={formState.username}
            // onChange={handleChange}
          />
          <Form.Input
          className="field"
            label="Password"
            icon="lock"
            placeholder="Password.."
            name="password"
            type="password"
            // value={formState.password}
            // onChange={handleChange}
          />
           <Button className=" ui fluid large secondary animated submit" tabIndex="0">
          <div className="visible content">Login</div>
          <div className="hidden content">
    <i className="right arrow icon"></i>
  </div>
          </Button>
        </Segment>
      </Form>
      <Header id='signup' color='purple'>
        New to us? <a  href='/signup'
              >Sign Up</a>
      </Header>
    </Grid.Column>
  </Grid>
      
 
    );

    
}


export default Login;  




// const Login = (props) => {
//   const [formState, setFormState] = useState({ email: '', password: '' });
//   const [login ] = useMutation(LOGIN_USER);

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
//       const { data } = await login({
//         variables: { ...formState },
//       });

//       Auth.login(data.login.token);
//     } catch (e) {
//       console.error(e);
//     }

//     // clear form values
//     setFormState({
//       email: '',
//       password: '',
//     });
//   };



