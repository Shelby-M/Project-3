import React from "react";
import { Button, Form } from 'semantic-ui-react';

function Login(){
    return (
      <div >
          <div>
          <h1 className="ui purple center aligned header">Login</h1>
          <Form className="ui large form">
            <div className="ui stacked segment">
          <Form.Input
          className="field"
            label="Username"
            icon="user"
            placeholder="Username.."
            name="username"
            type="text"
          />
          <Form.Input
          className="field"
            label="Password"
            icon="lock"
            placeholder="Password.."
            name="password"
            type="password"
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








