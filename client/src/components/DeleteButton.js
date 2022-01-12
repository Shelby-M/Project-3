import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Button, Confirm, Icon } from 'semantic-ui-react';

import { QUERY_POSTS } from '../utils/queries';
import { DELETE_COMMENT, DELETE_POST } from '../utils/mutations';
import MyPopup from '../utils/MyPopup';

function DeleteButton({ postId, commentId, callback }) {
  const [confirmOpen, setConfirmOpen] = useState(false);

  const mutation = commentId ? DELETE_COMMENT : DELETE_POST;

  const [deletePostOrMutation] = useMutation(mutation, {
    update(proxy) {
      setConfirmOpen(false);
      if (!commentId) {
        const data = proxy.readQuery({
          query: QUERY_POSTS
        });
        data.getPosts = data.getPosts.filter((p) => p.id !== postId);
        proxy.writeQuery({ query: QUERY_POSTS, data });
      }
      if (callback) callback();
    },
    variables: {
      postId,
      commentId
    }
  });
  return (
    <>
      <MyPopup content={commentId ? 'Delete comment' : 'Delete post'}>
        <Button
          as="div"
          color="red"
          floated="right"
          onClick={() => setConfirmOpen(true)}
        >
          <Icon name="trash" style={{ margin: 0 }} />
        </Button>
      </MyPopup>
      <Confirm
        open={confirmOpen}
        onCancel={() => setConfirmOpen(false)}
        onConfirm={deletePostOrMutation}
      />
    </>
  );
}


export default DeleteButton;