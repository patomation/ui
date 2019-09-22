import React from 'react';


import {
  Keyboard,
  SideBar
} from './components';

//Disables context menu
// document.addEventListener("contextmenu", e => {
//   // e.preventDefault();
// })


function App() {
  return (
    <SideBar
      menuStyle={{
        overflow:'hidden'
      }}
      menuWidth={'60px'}>
    <div style={{
      // position: 'absolute',
      // width: 'calc(100% - 20px)',
      // display: 'inline-block',
      // width: '100%',
      // height: '100%',
      // margin: '10px',
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'nowrap',
    }}>
    <h2 style={{
      width: '100%',
      flexGrow: 0,
      textAlign: 'center'
    }}>Title</h2>
    <Keyboard
      onDown={ (key)=>{
        console.log(`${key} Down`);
      }}
      onUp={ (key)=>{
        console.log(`${key} up`);
      }}
      enabled={{
        'q':'',
        'r':'',
      }}
      hideDisabled={true}
      style={{
        // boxSizing: 'content-box',
        width: '100%',
        // height: '100%',
        flexGrow: 1,
        // padding: '10px'
      }}
      gap={'10px'}
      buttonStyle={{
        background: '#4b644a'
      }}
      activeStyle={{
        background: 'blue'
      }}
      hoverStyle={{
        background: 'purple'
      }}
      disabledStyle={{
        background: 'black'
      }}
      />
      </div>
      </SideBar>
  );
}

export default App;
