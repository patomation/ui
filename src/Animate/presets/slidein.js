const name = `slidein`

const animation = (time = 0.5) => {
  return `${name} ${time}s forwards`
}

animation.style = {
  transform: 'translateX(-100%)',
  WebkitTransform: 'translateX(-100%)',
}

animation.keyframes = `
@keyframes ${name} {
  100% { transform: translateX(0%); }
}

/* Firefox < 16 */
@-moz-keyframes ${name} {
  100% { -moz-transform: translateX(0%); }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes ${name} {
  100% { -webkit-transform: translateX(0%); }
}

/* Internet Explorer */
@-ms-keyframes ${name} {
  100% { -ms-transform: translateX(0%); }
}

/* Opera < 12.1 */
@-o-keyframes ${name} {
  100% { -o-transform: translateX(0%); }
}
`

export default animation
