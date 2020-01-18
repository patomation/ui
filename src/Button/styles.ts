import config from '../config'

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
    transition: 'background 150ms ease-in-out, color 150ms ease-in-out, transform 150ms ease'
  },
  kind: {
    normal: {
      // background: config.color.button.background,
      color: config.color.button.color,
      active: {
        filter: 'brightness(130%)'
      },
      hover: {
        filter: 'brightness(85%)'
      },
      disabled: {
        background: 'gray',
        cursor: 'auto'
      },
      enabled: {
        background: '#40e0d0'
      }
    },
    outline: {
      background: 'none',
      color: config.color.button.background,
      border: `1px solid ${config.color.button.background}`,
      active: {
        filter: 'brightness(130%)'
      },
      hover: {
        filter: 'brightness(85%)'
      },
      disabled: {
        color: 'gray',
        border: '1px solid gray'
      },
      enabled: {}
    },
    text: {
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
        opacity: '1'
      },
      disabled: {
        color: 'gray'
      },
      enabled: {}
    },
    none: {
      background: 'none',
      padding: 0,
      active: {
        filter: 'brightness(130%)'
      },
      hover: {
        filter: 'brightness(85%)'
      },
      disabled: {
        cursor: 'auto'
      },
      enabled: {
      }
    }
  }
}
