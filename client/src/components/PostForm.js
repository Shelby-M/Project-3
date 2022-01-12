import React from 'react';
import { Button, Grid, Header, Segment, Form } from 'semantic-ui-react';

function PostForm() {
    return (
        <>
         <Grid textalign='center' verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='purple' textalign='center'>Create a post! </Header>

           <Form size='large'>
        <Segment stacked>
            <Form.Field>
              <Form.Input
                placeholder="Hi World!"
                name="body"
                // onChange={onChange}
                // value={values.body}
                // error={error ? true : false}
              />
              </Form.Field>
              <Button className=" ui fluid large secondary animated submit" tabIndex="0">
          <div className="visible content">Post</div>
          <div className="hidden content">
    <i className="right arrow icon"></i>
  </div>
          </Button>
        </Segment>
      </Form>
      </Grid.Column>
      </Grid>
        </>
      );
    }

  export default PostForm