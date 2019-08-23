import config from '../config.js';

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
    userSelect: 'none',
    WebkitUserSelect: 'none',
    KhtmlUserSelect: 'none',
    MozUserSelect: 'none',
    MsUserSelect: 'none',
  },
  kind:{
    normal:{
      background: '#0069ed',
      color: '#ffffff',
      active: {
        background: 'gold'
      },
      hover: {
        background: 'red',
        transition: 'background 250ms ease-in-out, transform 150ms ease'
      },
      disabled: {
        background: 'gray',
        cursor: 'auto',
      }
    },
    outline:{
      background: 'none',
      color: "#ffffff",
      border: '1px solid rgba(255,255,255,0.75)',
      active: {
        background: 'gold'
      },
      hover:{
        border: '1px solid rgba(255,255,255,1)',
        transition: 'background 250ms ease-in-out, transform 150ms ease'
      },
      disabled: {
        color: "gray",
        border: '1px solid gray',
      }
    },
    text:{
      padding: 0,
      background: 'none',
      opacity: '0.75',
      fontWeight: 'bold',
      textAlign: 'center',
      lineHeight: 0,
      active: {
        color: 'gold'
      },
      hover: {
        opacity: '1',
        transition: 'background 250ms ease-in-out, transform 150ms ease'
      },
      disabled: {
        color: 'gray'
      }
    },
    none:{

    }
  }
}
