import logo from '../../logo.svg';
import '../../App.css';
import { Grid, Image,Button, Icon, Label ,Divider,Segment,Table,Comment, Form, Header} from 'semantic-ui-react'
import VerticalItemList from "../Item-List/VerticalItemList";
import React from 'react';
import _ from 'lodash'
const columns = _.times(5, (i) => (
  <Grid.Column key={i}>
    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
  </Grid.Column>
))
function ProductInformation(){

 


  
   
    return(
      <Grid celled>
    <Grid.Row>
      <Grid.Column width={3}>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column width={13}>
<Grid celled>
    <Grid.Row>
      [ORDER]GIày cao gót xuất dư cnk
    </Grid.Row>

    <Grid.Row>
     <Segment>Chưa Có Đánh Giá  <Divider vertical></Divider> 1 Đã Bán </Segment>
    </Grid.Row>
     <Grid.Row>
     ₫290.000
    </Grid.Row>
     <Grid.Row>
      <Table definition>
      <Table.Body>
        <Table.Row>
          <Table.Cell width={2}>Size</Table.Cell>
          <Table.Cell>1" x 2"</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Weight</Table.Cell>
          <Table.Cell>6 ounces</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Color</Table.Cell>
          <Table.Cell>Yellowish</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Odor</Table.Cell>
          <Table.Cell>Not Much Usually</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    </Grid.Row>
     <Grid.Row>
         <div>
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
  </div>
    </Grid.Row>
     <Grid.Row>
     <div>
    <Button animated>
      <Button.Content visible>Next</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
    <Button animated>
      <Button.Content visible>Shop</Button.Content>
      <Button.Content hidden>
        <Icon name='shop' />
      </Button.Content>
    </Button>
  </div>
    </Grid.Row>
     <Grid.Row>
     <Button.Group>
          <Button
           
            icon='minus'
            
          />
          <Button
           
            icon='plus'
            
          />
        </Button.Group>
    </Grid.Row>
  </Grid>
      </Grid.Column>
    </Grid.Row>
<Grid.Row>
    <Grid>{columns}</Grid>

    </Grid.Row>
    <Grid.Row>
      <Table definition>
      <Table.Body>
        <Table.Row>
          <Table.Cell width={2}>Size</Table.Cell>
          <Table.Cell>1" x 2"</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Weight</Table.Cell>
          <Table.Cell>6 ounces</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Color</Table.Cell>
          <Table.Cell>Yellowish</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Odor</Table.Cell>
          <Table.Cell>Not Much Usually</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    </Grid.Row>
      <Grid.Row>
   <Comment.Group>
    <Header as='h3' dividing>
      Comments
    </Header>

    <Comment>
      <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
      <Comment.Content>
        <Comment.Author as='a'>Matt</Comment.Author>
        <Comment.Metadata>
          <div>Today at 5:42PM</div>
        </Comment.Metadata>
        <Comment.Text>How artistic!</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Comment>
      <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
      <Comment.Content>
        <Comment.Author as='a'>Elliot Fu</Comment.Author>
        <Comment.Metadata>
          <div>Yesterday at 12:30AM</div>
        </Comment.Metadata>
        <Comment.Text>
          <p>This has been very useful for my research. Thanks as well!</p>
        </Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
      <Comment.Group>
        <Comment>
          <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
          <Comment.Content>
            <Comment.Author as='a'>Jenny Hess</Comment.Author>
            <Comment.Metadata>
              <div>Just now</div>
            </Comment.Metadata>
            <Comment.Text>Elliot you are always so right :)</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </Comment>

    <Comment>
      <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
      <Comment.Content>
        <Comment.Author as='a'>Joe Henderson</Comment.Author>
        <Comment.Metadata>
          <div>5 days ago</div>
        </Comment.Metadata>
        <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Form reply>
      <Form.TextArea />
      <Button content='Add Reply' labelPosition='left' icon='edit' primary />
    </Form>
  </Comment.Group>
    </Grid.Row>
    <Grid.Row>
     <VerticalItemList topic="Relative products"/>
    </Grid.Row>
   <Grid.Row>
     <VerticalItemList topic="You may like"/>
    </Grid.Row>
  </Grid>
    );
  };


export default ProductInformation;