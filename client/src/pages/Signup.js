import React, {  useState, useContext } from 'react';
import { Button, Form, Segment, Container, Grid, Header } from 'semantic-ui-react';
import { useMutation } from '@apollo/client';
// import Auth from '../utils/auth';

import { AuthContext } from '../context/auth';
import { useForm } from '../utils/hooks';
import { SIGNUP_USER } from '../utils/mutations';


function Signup(props) {
  const context = useContext(AuthContext);
  const [errors ] = useState({});
const { onChange, onSubmit, values } = useForm(signup, {
  username: '',
  email: '',
  password: '',
});


const [addUser, { loading }] = useMutation(SIGNUP_USER, {
  update: (proxy, result) => {
      context.login(result.data.register);
      props.history.push('/login');
  },
  variables: values, 
});

function signup() {
  addUser();
}

  return (
    <Container>
       <Grid textalign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='purple' textalign='center'>Signup</Header>
        <Segment stacked>
      <Form onSubmit={onSubmit} noValidate className={loading ? 'loading' : ''}>
        <Form.Input
          label="Username"
          placeholder="Username.."
          name="username"
          type="text"
          value={values.username}
          error={errors.username ? true : false}
          onChange={onChange}
        />
        <Form.Input
          label="Email"
          placeholder="Email.."
          name="email"
          type="email"
          value={values.email}
          error={errors.email ? true : false}
          onChange={onChange}
        />
        <Form.Input
          label="Password"
          placeholder="Password.."
          name="password"
          type="password"
          value={values.password}
          error={errors.password ? true : false}
          onChange={onChange}
        />
        <Button type="submit" primary>
          Sign Up
        </Button>
      </Form>
      {Object.keys(errors).length > 0 && (
        <div className="ui error message">
          <ul className="list">
            {Object.values(errors).map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>
      )}
      </Segment>
    </Grid.Column>
    </Grid>
    </Container>
  );
}


export default Signup;