import config from '../config.js';

export default {
  container:{

  },
  menu:{
    backgroundColor: '#36494e',
    color: "#a9cef4",
    height: '100%',
    width: config.size.sideBar,
    position:'fixed',
    overflowY: 'scroll',
    overflowX: 'hidden',
  },
  content:{
    marginLeft: config.size.sideBar
  }

}
