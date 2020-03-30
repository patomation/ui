export default {
  container: {
    height: '100%'
  },
  menu: {
    backgroundColor: '#000000',
    color: '#ffffff',
    height: '100%',
    margin: 0,
    padding: 0,
    position: 'fixed' as 'fixed',
    overflowY: 'auto' as 'auto', // Was scroll
    overflowX: 'hidden' as 'hidden'
  },
  content: {
    // display: 'flex', //We had this for some reason
    flexFlow: 'column',
    height: '100%',
    background: 'gray'
  }
}
