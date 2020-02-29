import config from '../config'

export default {
  container: {
    width: '100%',
    display: 'block'
  },
  border: {
    display: 'block',
    width: '100%',
    border: '1px solid rgba(0,0,0, 0.20)',
    borderRadius: config.size.corners,
    WebkitBorderRadius: config.size.corners,
    MozBorderRadius: config.size.corners,
    MozOverflow: 'hidden',
    overflow: 'hidden',
    height: '42px'
  },
  select: {
    WebkitAppearance: 'none' as 'none', // Disable chrome styles
    MozAppearance: 'none' as 'none', // Disable firefox styles
    border: 'none',
    height: '100%',
    width: '100%',
    margin: 0,
    paddingLeft: '1rem',
    paddingRight: '1rem',
    WebkitBoxSizing: 'border-box' as 'border-box', /* Safari/Chrome, other WebKit */
    MozBoxSizing: 'border-box' as 'border-box', /* Firefox, other Gecko */
    boxSizing: 'border-box' as 'border-box', /* Opera/IE 8+ */
    // width: '100%',
    fontFamily: 'sans-serif',
    fontSize: '1rem',
    textAlign: 'center' as 'center',
    textDecoration: 'none'
  },
  option: {

  },
  errorBorder: {
    border: '2px solid red'
  },
  error: {
    padding: '1rem 0 0 0'
  }
}
