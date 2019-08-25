import config from '../config.js';

export default {
  container:{
    height: '100%'
  },
  menu:{
    backgroundColor: '#36494e',
    color: "#a9cef4",
    height: '100%',
    margin: 0,
    padding: 0,
    width: config.size.sideBar,
    position:'fixed',
    overflowY: 'scroll',
    overflowX: 'hidden',
  },
  content:{
    marginLeft: config.size.sideBar,
    display: 'flex',
    flexFlow: 'column',
    height: '100%',
    // position: 'fixed',
    // height: '100%',
    // width: `calc(100% - ${config.size.sideBar})`,
    // overflow: 'hidden scroll'
  }

}
