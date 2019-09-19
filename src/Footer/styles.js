import config from '../config.js';
console.log('COLOR', config);
export default {
  container:{
    color: '#ffffff',
    background: config.color.violet,
    padding: config.size.gutters,
  },
}
