import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';
// import moment from 'moment';

function PostCard(){
 
    return (
        <Card.Fluid>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
        />
        <Card.Header>Gracie Maxine</Card.Header>
        {/* <Card.Meta as={Link} to={`/posts/${id}`}>
          {moment(createdAt).fromNow(true)}
        </Card.Meta> */}
        <Card.Description>post post post example</Card.Description>
      </Card.Content>
      <Card.Content extra>
      <Button
      color='red'
      content='Like'
      icon='heart'
      label={{ basic: true, color: 'red', pointing: 'left', content: '2,048' }}
    />
    <Button
      basic
      color='blue'
      content='Fork'
      icon='fork'
      label={{
        as: 'a',
        basic: true,
        color: 'blue',
        pointing: 'left',
        content: '2,048',
      }}
      />
      </Card.Content>
    </Card.Fluid>

    )

}

export default PostCard;
