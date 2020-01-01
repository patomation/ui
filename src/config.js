const config = {
  size: {
    corners: '6px',
    gutters: '1rem',
    sideBar: '200px',
    media: {
      xs: '320px', // smartphones, iPhone, portrait 480x320 phones
      sm: '481px', // portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide.
      md: '641px', // portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones
      lg: '961px', // tablet, landscape iPad, lo-res laptops ands desktops
      xl: '1025px', // big landscape tablets, laptops, and desktops
      xxl: '1281px' // hi-res laptops and desktops
    }
  },
  color: {
    primary: '#2f0147',

    dust: '#e2c2c6', // Lightest
    tuscany: '#b9929f',
    berry: '#9c528b',
    indigo: '#610f7f',
    violet: '#2f0147', // Darkest

    dark: 'rgba(32,32,43,1)',
    light: 'rgba(228,248,235,1)',

    info: 'blue',
    infoBackground: 'rgb(223,223,255)',
    warning: 'orange',
    warningBackground: 'rgb(255,226,198)',
    error: 'red',
    errorBackground: 'rgb(255,230,230)',
    success: 'green',
    successBackground: 'rgb(218,248,226)',

    button: {
      color: '#ffffff',
      background: '#2f0147'
    }
  }

}

export default config
