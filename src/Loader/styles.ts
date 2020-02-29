import config from '../config'

export default {
  container: {

  },
  progressBarContainer: {
    border: '2px solid rgba(0,0,0, 0.20)',
    borderRadius: config.size.corners,
    WebkitBorderRadius: config.size.corners,
    MozBorderRadius: config.size.corners,
    overflow: 'hidden',
    MozOverflow: 'hidden',
    margin: '1rem auto',
    background: 'rgba(0,0,0, 0.05)',
    height: '20px',
    maxWidth: '300px',
    paddingRight: '1px', // border fix
    paddingBottom: '1px' // border fix
  },
  progressBar: {
    height: '100%',
    background: config.color.primary,
    paddingRight: '1px', // border fix
    paddingBottom: '1px' // border fix
  }
}
