import React from "react";
import {Button, Form, Grid, Header, Segment} from 'semantic-ui-react'


function Signup(){
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='purple' textAlign='center'>Sign Up </Header>

           <Form size='large'>
        <Segment stacked>
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
          <Button className=" ui fluid large secondary animated submit" ref={Signup} tabIndex="0">
            <div className="visible content">Sign Up</div>
            <div className="hidden content">
              <i className="right arrow icon"></i>
            </div>
          </Button>
      </Segment>
        </Form>
        </Grid.Column>
  </Grid>

    )
    

}

export default Signup;