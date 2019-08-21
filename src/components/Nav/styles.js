import config from '../config.js'

export default {
  container:{

  },
  item:{
    color: '#ffffff',
    marginRight: config.size.gutters,
    position: 'relative',
    paddingBottom: '0.5rem',
    display: 'inline-block',
    textDecoration: 'none',
    opacity: '0.75'
  },
  bottomBar:{
    // background: '#ffffff',
    position: 'absolute',
    bottom: '0',
    width: '100%',
    height: '4px',
    borderRadius: `${config.size.corners} ${config.size.corners} 0 0`,
  }
}
