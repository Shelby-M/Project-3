import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import {Form, Button} from 'semantic-ui-react'

import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };
    return (
      <div >
          <div>
          <h1 className="ui purple center aligned header">Login</h1>
          <Form className="ui large form" onSubmit={handleFormSubmit}>
            <div className="ui stacked segment">
          <Form.Input
          className="field"
            label="Username"
            icon="user"
            placeholder="Username.."
            name="username"
            type="text"
            value={formState.username}
            onChange={handleChange}
          />
          <Form.Input
          className="field"
            label="Password"
            icon="lock"
            placeholder="Password.."
            name="password"
            type="password"
            value={formState.password}
            onChange={handleChange}
          />
          </div>
          
          <Button className=" ui fluid large secondary animated submit" tabindex="0">
          <div class="visible content">Login</div>
          <div class="hidden content">
    <i class="right arrow icon"></i>
  </div>
          </Button>
        </Form>
       
        </div>
        <h2 style={{ textAlign: "center", color: "purple"}}>New to us?<a href="#signup"> Sign Up</a></h2>
      </div>
      
 
    );

    
}


export default Login;  








