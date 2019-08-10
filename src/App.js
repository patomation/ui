import React from 'react';

//Kitchen Sink - Admin Pannel
import {
  Header,
  Heading,
  SideBar,
  Nav,
  NavItem,
  Icon,
  Button,
  User,
  Panel,
  SideBarItem,
  Link,
  IconButton,
  Hr
} from './components';

function App() {
  return (
    <SideBar
      menu={
        <div>
          <Heading Tag='h1' style={{paddingLeft:'1rem'}}>Admin</Heading>
          <Hr />
          <SideBarItem icon='home' color='#ffffff' title='Project Overview' />
          <Hr />
          <Heading Tag='h2' style={{paddingLeft:'1rem'}}>Develop</Heading>
          <SideBarItem icon='lock' color='#ffffff' title='Athenticaiton' />
          <SideBarItem icon='list' color='#ffffff' title='Database' />
          <SideBarItem icon='photo' color='#ffffff' title='Storage' />
          <SideBarItem icon='cloud' color='#ffffff' title='Hosting' />
          <SideBarItem icon='code' color='#ffffff' title='Funcitons' />
          <Hr />
          <Heading Tag='h2' style={{paddingLeft:'1rem'}}>Quality</Heading>
          <SideBarItem icon='settings' color='#ffffff' title='Analytics' />
          <SideBarItem icon='timer' color='#ffffff' title='Performance' />
          <SideBarItem icon='smartphone' color='#ffffff' title='Test Lab' />
        </div>
      }>

      <Header>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          margin: '1rem 0'
        }}>
          <div style={{flexGrow: 1}}></div>

          <Button
            style={{
              flexGrow: 0
            }}
            color="#ffffff"
            type='text'>Go to Docs</Button>

          <IconButton
            style={{
              flexGrow: 0,
              padding: '0 0.5rem'
            }}
            color="#ffffff"
            icon='notifications'/>

          <User
            style={{
              flexGrow: 0
            }}
            image="http://patomation.github.io/assets/images/Patrick-Profile-Picture-1.png"/>

        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          margin: '1rem 0'

        }}>
          <Heading
            style={{
              flexGrow: 1,
              margin: 0
            }}
            Tag="h1" color="#ffffff">Authentication</Heading>

          <Button
            style={{
              flexGrow: 0
            }} type="outline">Web setup</Button>
          <IconButton
            style={{
              flexGrow: 0,
              padding: '0 0.5rem'
            }} color="#ffffff" icon='help' />
        </div>

        <Nav>
          <NavItem title='Users' href="/" active={true}/>
          <NavItem title='Sign-in Method' href="/"  />
          <NavItem title='Tempaltes' href="/"  />
          <NavItem title='Usage' href="/"  />
        </Nav>

      </Header>

      <Panel style={{
        padding: 0,
        paddingBottom: '10px',
        overflow: 'hidden'
      }}>
        <div style={{
          display: 'flex',
          padding: '0.25rem',
          background: 'rgba(0,0,0,0.1)',
        }}>
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
        </div>
        <Hr/>
        <p style={{
          padding: '1rem',
          textAlign: 'center'
        }}>No users found</p>

      </Panel>

      <Panel>
        <p>
          Everyone needs a friend. Friends are the most valuable things in the world. Every highlight needs it's own personal shadow. Work that paint. Happy painting, God bless. Just use the old one inch brush. Everything's not great in life, but we can still find beauty in it.
        </p>
        <Button>Click Me</Button>
      </Panel>



    </SideBar>
  );
}

export default App;
