import React from "react";
import { Button, Form } from 'semantic-ui-react';


function Signup(){
    return (
        <div className="form-container">
        <Form>
          <h1>Sign Up</h1>
          <Form.Input
            label="Username"
            placeholder="Username.."
            icon="user"
            name="username"
            type="text"
          />
          <Form.Input
            label="Email"
            placeholder="Email.."
            icon="mail"
            name="email"
            type="email"
          />
          <Form.Input
            label="Password"
            placeholder="Password.."
            icon="lock"
            name="password"
            type="password"
          />
          <Form.Input
            label="Confirm Password"
            placeholder="Confirm Password.."
            icon="lock"
            name="confirmPassword"
            type="password"
          />
          <Button type="submit" primary>
            Sign Up
          </Button>
        </Form>
    </div>
    )
    

}

export default Signup;