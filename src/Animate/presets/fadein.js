const name = `fadein`

const animation = (time = 0.5) => {
  return `${name} ${time}s`
}

animation.style = {
  // opacity: 0 //not required. causes more problems then good.
}

animation.keyframes = `
@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
/* Firefox < 16 */
@-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Internet Explorer */
@-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
`

export default animation
