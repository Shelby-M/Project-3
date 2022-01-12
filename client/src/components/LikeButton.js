import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LIKE_POST } from '../utils/mutations';
import { Button, Label, Icon } from 'semantic-ui-react';

import MyPopup from '../utils/MyPopup';

function LikeButton({ user, post: { id, likeCount, likes } }) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (user && likes.find((like) => like.username === user.username)) {
      setLiked(true);
    } else setLiked(false);
  }, [user, likes]);

  const [likePost] = useMutation(LIKE_POST, {
    variables: { postId: id }
  });

  const likeButton = user ? (
    liked ? (
      <Button color="purple">
        <Icon name="heart" />
      </Button>
    ) : (
      <Button color="purple" basic>
        <Icon name="heart" />
      </Button>
    )
  ) : (
    <Button as={Link} to="/login" color="purple" basic>
      <Icon name="heart" />
    </Button>
  );

  return (
    <Button as="div" labelPosition="right" onClick={likePost}>
      <MyPopup content={liked ? 'Unlike' : 'Like'}>{likeButton}</MyPopup>
      <Label basic color="teal" pointing="left">
        {likeCount}
      </Label>
    </Button>
  );
}


export default LikeButton;