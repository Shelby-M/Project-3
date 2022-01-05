import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';

function PostForm() {
    return (
        <>
          <Form onSubmit={onSubmit}>
            <h2>Create a post:</h2>
            <Form.Field>
              <Form.Input
                placeholder="Hi World!"
                name="body"
                onChange={onChange}
                value={values.body}
                error={error ? true : false}
              />
              <Button type="submit" color="purple">
                Submit
              </Button>
            </Form.Field>
          </Form>
        </>
      );
    }

  export default PostForm