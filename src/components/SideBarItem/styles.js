import config from '../../config.js';

export default {
  container:{
    width: '100%',
    textAlign: 'left',
    cursor: 'pointer',
    display: 'flex',
    padding: '0.25rem 0',
    background: 'none',
    border: 'none',
    paddingLeft: config.size.gutters
  },
  hover:{
    background: 'rgba(255,255,255, 0.1)',
  },
  iconContainer:{
    flexGrow: 0
  },
  icon:{

  },
  titleContainer:{
    flexGrow: 1,
    position: 'relative',
    paddingLeft: config.size.gutters
  },
  title:{
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
  }
}
