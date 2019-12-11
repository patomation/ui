import React from 'react';

//Kitchen Sink - Admin Pannel
import {
  // Badge,
  Brand,
  // Breakpoints,
  Button,
  Calendar,
  Card,
  Carousel,
  Center,
  Clickable,
  Code,
  Collapse,
  Content,
  DragDrop,
  Error,
  Footer,
  Form,
  Grid,
  Gutter,
  Header,
  Heading,
  Hero,
  Hr,
  Icon,
  IconButton,
  Image,
  ImageGrid,
  Input,
  // Link,
  List,
  LoginForm,
  Modal,
  Nav,
  Panel,
  RegisterForm,
  Row,
  Section,
  Shape,
  SideBar,
  Spinner,
  Tabs,
  User
} from '../src';

const AdminDemo = () =>
<SideBar
  width='250px'
  menu={
    <Grid gap='1rem' style={{paddingTop: '1rem'}}>
      <Brand style={{textAlign: 'center'}}>React Ui Components</Brand>

      <Heading Tag='h1' style={{paddingLeft:'1rem'}}>Admin</Heading>
      <Hr />
      <IconButton name='home' color='#ffffff' title='Project Overview' style={{textAlign: 'left', paddingLeft: '1rem'}}/>
      <Hr />
      <Heading Tag='h2' style={{paddingLeft:'1rem'}}>Develop</Heading>
      <IconButton name='lock' color='#ffffff' title='Athenticaiton' style={{textAlign: 'left', paddingLeft: '1rem'}}/>
      <IconButton name='list' color='#ffffff' title='Database' style={{textAlign: 'left', paddingLeft: '1rem'}}/>
      <IconButton name='photo' color='#ffffff' title='Storage' style={{textAlign: 'left', paddingLeft: '1rem'}}/>
      <IconButton name='cloud' color='#ffffff' title='Hosting' style={{textAlign: 'left', paddingLeft: '1rem'}}/>
      <IconButton name='code' color='#ffffff' title='Funcitons' style={{textAlign: 'left', paddingLeft: '1rem'}}/>
      <Hr />
      <Heading Tag='h2' style={{paddingLeft:'1rem'}}>Quality</Heading>
      <IconButton name='settings' color='#ffffff' title='Analytics' style={{textAlign: 'left', paddingLeft: '1rem'}}/>
      <IconButton name='timer' color='#ffffff' title='Performance' style={{textAlign: 'left', paddingLeft: '1rem'}}/>
      <IconButton name='smartphone' color='#ffffff' title='Test Lab' style={{textAlign: 'left', paddingLeft: '1rem'}}/>
    </Grid>
  }>

  <Header>
    <Row>
      <div style={{flexGrow: 1}}></div>
        <Button
          color="#ffffff"
          kind='text'>Go to Docs</Button>

        <Gutter vertical/>

        <IconButton
          color="#ffffff"
          badge={5}
          icon='notifications'/>

        <Gutter vertical />

        <User
          image="http://patomation.github.io/assets/images/Patrick-Profile-Picture-1.png"/>
    </Row>

    
    <Gutter/>

    <Row>
      <Heading
        style={{
          flexGrow: 1,
          margin: 0,
          alignSelf: 'flex-end'
        }}
        Tag="h1" color="#ffffff">Authentication</Heading>

      <Button
        style={{
          flexGrow: 0
        }} kind="outline">Web setup</Button>
      <IconButton
        style={{
          flexGrow: 0,
          padding: '0 0.5rem'
        }} color="#ffffff" icon='help' />
    </Row>


  </Header>
  <Nav>
    <Button title='Users' href="/" active={true}/>
    <Button title='Sign-in Method' href="/"  />
    <Button title='Tempaltes' href="/"  />
    <Button title='Usage' href="/"  />
  </Nav>

  <Panel
    header={
      <Row>
        <IconButton icon='search' style={{padding:'0 0.5rem'}} />
        <input
        style={{
          flexGrow: 1,
          border: 'none',
          background: 'none',
          padding:'0 0.5rem',
        }}
        placeholder="Search by email address, phone number" />
        <Button>Add User</Button>
        <IconButton icon='refresh' style={{padding:'0 0.5rem'}} />
      </Row>
    }>

    <p style={{
      padding: '1rem',
      textAlign: 'center'
    }}>No users found</p>

  </Panel>

  <Panel>
    <Grid gap='1rem'>
      <p>
        Everyone needs a friend.
        Friends are the most valuable things in the world.
        Every highlight needs it's own personal shadow. Work that paint.
        Happy painting, God bless. Just use the old one inch brush.
        Everything's not great in life, but we can still find beauty in it.
      </p>

      <Button center>Click Me</Button>
    </Grid>
  </Panel>

  <Panel header={<Heading Tag='h2'>Calendar</Heading>}>
    <Calendar />
  </Panel>

  <Section>
    <Grid col={3} gap='1rem'>
      <Card
        image="http://patomation.github.io/assets/images/Patrick-Profile-Picture-1.png"
        middle='this card'
        bottom={<Button center title='invest today' />}/>
      <Card
        image="http://patomation.github.io/assets/images/Patrick-Profile-Picture-1.png"
        middle='this card'
        bottom={<Button center title='invest today' />}/>
      <Card
        image="http://patomation.github.io/assets/images/Patrick-Profile-Picture-1.png"
        middle='this card'
        bottom={<Button center title='invest today' />}/>
    </Grid>
  </Section>

  <Panel header={<Heading Tag='h2'>Carousel Support</Heading>}>
    <Carousel>
      <Image rectangle src='http://patomation.github.io/assets/images/Patrick-Profile-Picture-1.png' />
      <Image rectangle src='http://patomation.github.io/assets/images/Patrick-Profile-Picture-1.png' />
      <Image rectangle src='http://patomation.github.io/assets/images/Patrick-Profile-Picture-1.png' />
    </Carousel>
  </Panel>

  <Panel header={<Heading Tag='h2'>Clickable</Heading>}>
    <Clickable>This is clickable</Clickable>
    This is not clickable
  </Panel>

  <Panel header={<Heading Tag='h2'>Code Blocks</Heading>}>
    Todo code
  </Panel>



</SideBar>


export default AdminDemo
