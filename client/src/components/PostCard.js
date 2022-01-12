import React, {useContext} from 'react';
import { Button, Card, Image, Icon, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Auth from '../utils/auth';

import LikeButton from './LikeButton';
import DeleteButton from './DeleteButton';
import MyPopup from '../utils/MyPopup';

function PostCard({
  post: { body, createdAt, id, username, likeCount, commentCount, likes }
}) {

  const { user } = useContext(Auth);
 
    return (
        <Card.Group>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
        />
        <Card.Header>{username}</Card.Header>
        <Card.Meta as={Link} to={`/posts/${id}`}>
          {moment(createdAt).fromNow(true)}</Card.Meta>
        <Card.Description>
         { body }
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <LikeButton user={user} post={{ id, likes, likeCount }} />
        <MyPopup content="Comment on post">
          <Button labelPosition="right" as={Link} to={`/posts/${id}`}>
            <Button color="blue" basic>
              <Icon name="comments" />
            </Button>
            <Label basic color="blue" pointing="left">
              {commentCount}
            </Label>
          </Button>
        </MyPopup>
        {user && user.username === username && <DeleteButton postId={id} />}
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
          />
          <Card.Header>Molly Thomas</Card.Header>
          <Card.Meta>New User</Card.Meta>
          <Card.Description>
            Molly wants to add you to the group <strong>musicians</strong>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <div>
    <Button 
      color='red'
      content='Like'
      icon='heart'
      label={{ basic: true, color: 'red', pointing: 'left', content: '2,048' }}
    />
    <Button
      basic
      color='black'
      content='Comment'
      icon='comments'
      label={{
        as: 'a',
        basic: true,
        color: 'black',
        pointing: 'left',
        content: '2,048',
      }}
    />
  </div>
          
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Image
            floated='right'
            size='mini'
            src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
          />
          <Card.Header>Jenny Lawrence</Card.Header>
          <Card.Meta>New User</Card.Meta>
          <Card.Description>
            Jenny requested permission to view your contact details
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <div>
    <Button 
      color='red'
      content='Like'
      icon='heart'
      label={{ basic: true, color: 'red', pointing: 'left', content: '2,048' }}
    />
    <Button
      basic
      color='black'
      content='Comment'
      icon='comments'
      label={{
        as: 'a',
        basic: true,
        color: 'black',
        pointing: 'left',
        content: '2,048',
      }}
    />
          </div>
        </Card.Content>
        </Card>
  </Card.Group>
)
        
    

}

export default PostCard;



















//     <Card.Fluid>
    //   <Card.Content>
    //     <Image
    //       floated='right'
    //       size='mini'
    //       src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
    //     />
    //     <Card.Header>Gracie Maxine</Card.Header>
    //     {/* <Card.Meta as={Link} to={`/posts/${id}`}>
    //       {moment(createdAt).fromNow(true)}
    //     </Card.Meta> */}
    //     <Card.Description>post post post example</Card.Description>
    //   </Card.Content>
    //   <Card.Content extra>
    //   <Button
    //   color='red'
    //   content='Like'
    //   icon='heart'
    //   label={{ basic: true, color: 'red', pointing: 'left', content: '2,048' }}
    // />
    // <Button
    //   basic
    //   color='blue'
    //   content='Fork'
    //   icon='fork'
    //   label={{
    //     as: 'a',
    //     basic: true,
    //     color: 'blue',
    //     pointing: 'left',
    //     content: '2,048',
    //   }}
    //   />
    //   </Card.Content>
    // </Card.Fluid>

    // )