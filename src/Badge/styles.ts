import config from '../config'

export default {
  container: {
    background: 'blue',
    display: 'inline-block',
    position: 'absolute',
    height: '1px',
    width: '1px',
    right: 0,
    fontSize: '.7rem',
    color: '#ffffff'
  },
  shape: {
    width: '10px',
    position: 'absolute',
    left: '-5px',
    top: '-5px'
  },
  shapeInner: {
    lineHeight: 0,
    position: 'absolute',
    width: ' 100%'
  },
  icon: {
    position: 'absolute',
    left: '10%',
    top: '1px',
    width: '80%'
  },
  shapeForLabel: {
    background: config.color.violet,
    position: 'absolute',
    left: '-0.5rem',
    top: '-0.5rem',
    borderRadius: '0.75rem',
    padding: '0.25rem 0.4rem'
  }
}
