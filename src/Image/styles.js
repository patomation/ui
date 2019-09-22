export default {

  default: {
    container: {

    },
    image: {

    }
  },

  background: {
    container: {
      position: 'absolute',
      zIndex: '-10',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden'
    },
    image: {
      position: 'absolute',
      left: 0,
      top: '-50%',
      width: '100%'
    }
  },

  square: {
    container: {
      position: 'relative',
      overflow: 'hidden',
      height: '0',
      width: '100%',
      paddingBottom: '100%',
      textAlign: 'left'
    },
    image: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  },
  rectangle: {
    container: {
      position: 'relative',
      overflow: 'hidden',
      height: '0',
      width: '100%',
      paddingBottom: '56%', // 16:9 aspect ratio = 56%
      textAlign: 'left'
    },
    image: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }

}
