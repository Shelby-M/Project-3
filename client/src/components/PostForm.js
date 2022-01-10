import React from 'react';
import { Button, Container, Form } from 'semantic-ui-react';

function PostForm() {
    return (
        <>
        <Container style={{}}>
          <Form>
            <h2>Create a post:</h2>
            <Form.Field>
              <Form.Input
                placeholder="Hi World!"
                name="body"
                // onChange={onChange}
                // value={values.body}
                // error={error ? true : false}
              />
              <Button type="submit" color="purple">
                Submit
              </Button>
            </Form.Field>
          </Form>
        </Container>
        </>
      );
    }

  export default PostForm