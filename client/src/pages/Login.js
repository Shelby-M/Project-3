import React from "react";
import { Button, Form } from 'semantic-ui-react';

function Login(){
    return (
        <div className="form-container">
        <Form>
          <h1>Login</h1>
          <Form.Input
            label="Username"
            placeholder="Username.."
            name="username"
            type="text"
          />
          <Form.Input
            label="Password"
            placeholder="Password.."
            name="password"
            type="password"
          />
          <Button type="submit" primary>
            Login
          </Button>
        </Form>
        {/* {Object.keys(errors).length > 0 && (
          <div className="ui error message">
            <ul className="list">
              {Object.values(errors).map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </div>
        )} */}
      </div>
    );

}

export default Login;