import config from '../config.js';

export default {
  container:{
    background: 'rgba(255,255,255, 0.75)',
    boxShadow: '0 1px 0.2rem rgba(0,0,0,0.25)',
    margin: config.size.gutters,
    borderRadius: config.size.corners,
    overflow: 'hidden',
  },
  header:{
    padding: '0.25rem',
    background: 'rgba(0,0,0,0.1)',
  },
  content:{
    padding: '1rem'
  }
}
