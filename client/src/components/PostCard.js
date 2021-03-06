import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';
// import moment from 'moment';

function PostCard(){

 
    return (
        <Card.Group>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
        />
        <Card.Header>Steve Sanders</Card.Header>
        <Card.Meta>Friends of Elliot</Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
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