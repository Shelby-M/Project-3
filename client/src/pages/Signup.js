import React from "react";
import { Button, Form } from 'semantic-ui-react';


function Signup(){
    return (
        <div className="form-container">
        <Form>
          <h1 className="ui purple center aligned header">Sign Up</h1>
          <Form.Input
            label="Username"
            placeholder="Username.."
            icon="user"
            name="username"
            type="text" />
          <Form.Input
            label="Email"
            placeholder="Email.."
            icon="mail"
            name="email"
            type="email" />
          <Form.Input
            label="Password"
            placeholder="Password.."
            icon="lock"
            name="password"
            type="password" />
          <Form.Input
            label="Confirm Password"
            placeholder="Confirm Password.."
            icon="lock"
            name="confirmPassword"
            type="password" />
          <Button className=" ui fluid large secondary animated submit" tabindex="0">
            <div class="visible content">Sign Up</div>
            <div class="hidden content">
              <i class="right arrow icon"></i>
            </div>
          </Button>
     
        </Form>
      </div>
    )
    

}

export default Signup;