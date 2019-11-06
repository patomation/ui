import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'

import slidein from './presets/slidein'
import fadein from './presets/fadein'

const Animate = ({
  className, children, style,
  fadeIn, slideIn,
  left,
  time
}) => {
  const animations = [
    slidein(time),
    fadein(time)
  ].join(',')

  return (
    <div
      className={className}
      style={{
        ...styles.container,
        ...style,
        ...(slideIn ? slidein.style : null),
        ...(fadeIn ? fadein.style : null),
        animation: animations
      // WebkitAnimation: 'slide-in 0.5s forwards, fade-in 0.75s forwards',
      // WebkitAnimation: 'fadein 2s',  /* Safari, Chrome and Opera > 12.1 */
      //    MozAnimation: 'fadein 2s', /* Firefox < 16 */
      //     MsAnimation: 'fadein 2s', /* Internet Explorer */
      //      Oanimation: 'fadein 2s', /* Opera < 12.1 */
      //       animation: 'fadein 2s',
      }}>

      <style>
        {slideIn ? slidein.keyframes : ''}
        {fadeIn ? fadein.keyframes : ''}
      </style>

      {children}

    </div>
  )
}

Animate.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  style: PropTypes.object,
  fadeIn: PropTypes.bool,
  slideIn: PropTypes.bool,
  left: PropTypes.bool,
  time: PropTypes.number
}

Animate.defaultProps = {
  time: 0.5
}

export default Animate
