import config from '../config'
const shadowColor = 'rgba(0,0,0,0.25)'

export default {
  container: {
    MozBoxShadow: `inset 0 -10px 10px -10px ${shadowColor}`,
    WebkitBoxShadow: `inset 0 -10px 10px -10px ${shadowColor}`,
    boxShadow: `inset 0 -10px 10px -10px ${shadowColor}`,
    overflow: 'hidden',
    textAlign: 'center' as 'center',
    paddingTop: config.size.gutters,
    paddingLeft: config.size.gutters,
    paddingRight: config.size.gutters,
    WebkitTouchCallout: 'none',
    WebkitUserSelect: 'none',
    KhtmlUserSelect: 'none',
    MozUserSelect: 'none',
    MsUserSelect: 'none',
    userSelect: 'none'
  },
  tab: {
    textDecoration: 'none',
    fontWeight: 'bold',
    paddingTop: config.size.gutters,
    paddingBottom: config.size.gutters
  },
  active: {
    filter: `drop-shadow(0 0 5px ${shadowColor}`,
    borderTopLeftRadius: config.size.corners,
    borderTopRightRadius: config.size.corners,
    backgroundColor: 'white'

  }

}
