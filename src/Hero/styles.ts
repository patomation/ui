export default {
  container: {
    textAlign: 'center' as 'center',
    padding: '10rem 0 10rem 0',
    position: 'relative' as 'relative',
    color: '#ffffff'
  },
  title: {
    textShadow: '0 0 5px rgba(0,0,0,0.75)',
    fontSize: '2rem',
    lineHeight: '1.75rem'
  },
  description: {
    textShadow: '0 0 5px rgba(0,0,0,0.75)',
    fontSize: '1rem',
    lineHeight: '0.85rem'
  },
  image: {
    position: 'absolute' as 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    zIndex: -10
  },
  overlay: {
    position: 'absolute' as 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    zIndex: -1
  },
  background: {
    position: 'absolute' as 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    zIndex: -20
  }
}
