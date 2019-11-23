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
      height: '100%', // Android
      overflow: 'hidden', // Android
      WebkitBackgroundSize: 'cover',
      MozBackgroundSize: 'cover',
      ObackgroundSize: 'cover',
      backgroundSize: 'cover'
    }
  }

}
