import config from '../config.js'

export default {
  container: {
    height: '100%'
  },
  menu: {
    backgroundColor: '#36494e',
    color: '#a9cef4',
    height: '100%',
    margin: 0,
    padding: 0,
    width: config.size.sideBar,
    position: 'fixed',
    overflowY: 'scroll',
    overflowX: 'hidden'
  },
  content: {
    // display: 'flex', //We had this for some reason
    flexFlow: 'column',
    height: '100%'
  }
}
