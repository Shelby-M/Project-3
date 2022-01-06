import React from "react";
import { Button, Form } from 'semantic-ui-react';

function Login(){
    return (
        <div className="form-container">
        <Form>
          <h1>Login</h1>
          <Form.Input
            label="Username"
            icon="user"
            placeholder="Username.."
            name="username"
            type="text"
          />
          <Form.Input
            label="Password"
            icon="lock"
            placeholder="Password.."
            name="password"
            type="password"
          />
          <Button type="submit" primary>
            Login
          </Button>
        </Form>
      </div>
    );

}

export default Login;  








