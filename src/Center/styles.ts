export default {
  container: {
    pointerEvents: 'none',
    position: 'absolute',
    height: '100%',
    width: '100%',
    display: 'inline-block',
    WebkitTransformStyle: 'preserve-3d',
    MozTransformStyle: 'preserve-3d',
    transformStyle: 'preserve-3d'
  },
  content: {
    pointerEvents: 'all',
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    WebkitTransform: 'translate(-50%,-50%)',
    MsTransform: ' translate(-50%,-50%)'
  }
}
