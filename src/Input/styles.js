import config from '../config.js'

export default {
  container: {
    width: '100%',
    display: 'block'
  },
  input: {
    width: '100%',
    display: 'block',
    fontFamily: 'sans-serif',
    fontSize: '1rem',
    textAlign: 'center',
    border: '1px solid rgba(0,0,0,0.25)',
    padding: '0.5rem 1rem',
    borderRadius: config.size.corners,
    textDecoration: 'none',
    margin: '0',
    WebkitBoxSizing: 'border-box', /* Safari/Chrome, other WebKit */
    MozBoxSizing: 'border-box', /* Firefox, other Gecko */
    boxSizing: 'border-box' /* Opera/IE 8+ */
  },
  inputError: {
    border: '1px solid red'
  },
  error: {
    width: '100%',
    display: 'block',
    textAlign: 'center',
    color: 'red',
    padding: '0.5rem 0'
  }
}
