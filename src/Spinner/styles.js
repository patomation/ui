export default {
  container: {
    WebkitAnimation: 'spin 4s linear infinite',
    MozAnimation: 'spin 4s linear infinite',
    animation: 'spin 4s linear infinite'
  },
  keyframes: {
    spinCounterClockwise: `
      @keyframes spin {
        from {transform:rotate(360deg)}
        to {transform:rotate(0deg)}
      }`,
    spinClockwise: `
      @keyframes spin {
        from {transform:rotate(0deg)}
        to {transform:rotate(360deg)}
      }`
  }
}
