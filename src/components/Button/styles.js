import config from '../../config.js';

export default {
  default: {
    display: 'inline-block',
    fontFamily: 'sans-serif',
    fontSize: '1rem',
    cursor: 'pointer',
    textAlign: 'center',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: config.size.corners,
    textDecoration: 'none',
    margin: '0',
  },
  type:{
    normal:{
      background: '#0069ed',
      color: '#ffffff',
      hover: {
        background: 'red',
        transition: 'background 250ms ease-in-out, transform 150ms ease'
      }
    },
    outline:{
      background: 'none',
      color: "#ffffff",
      border: '1px solid rgba(255,255,255,0.75)',
      hover:{
        border: '1px solid rgba(255,255,255,1)',
        transition: 'background 250ms ease-in-out, transform 150ms ease'
      }
    },
    text:{
      padding: 0,
      background: 'none',
      opacity: '0.75',
      fontWeight: 'bold',
      textAlign: 'center',
      lineHeight: 0,
      hover: {
        opacity: '1',
        transition: 'background 250ms ease-in-out, transform 150ms ease'
      }
    },
    none:{

    }
  }
}
