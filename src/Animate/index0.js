import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'

// import fadein from './presets/fadein'

const Animate = ({
  className, children, style,
  fadeIn, slideIn

}) => <>
  <style>
    {`
    @keyframes slide-in {
      100% { transform: translateX(0%); }
    }

    @-webkit-keyframes slide-in {
      100% { -webkit-transform: translateX(0%); }
    }

  `}
  </style>
  <div
    className={className}
    style={{
      ...styles.container,
      ...style,
      // animation: 'slide-in 0.5s', /* Firefox < 16 */
      // MozAnimation: 'slide-in 0.5s', /* Firefox < 16 */
      // opacity: 0,
      // position: 'relative',
      transform: 'translateX(-100%)',
      WebkitTransform: 'translateX(-100%)',
      animation: 'slide-in 0.5s forwards'
      // WebkitAnimation: 'slide-in 0.5s forwards, fade-in 0.75s forwards',
      // WebkitAnimation: 'fadein 2s',  /* Safari, Chrome and Opera > 12.1 */
      //    MozAnimation: 'fadein 2s', /* Firefox < 16 */
      //     MsAnimation: 'fadein 2s', /* Internet Explorer */
      //      Oanimation: 'fadein 2s', /* Opera < 12.1 */
      //       animation: 'fadein 2s',
    }}>

    {children}

  </div>
  </>

Animate.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  style: PropTypes.object,
  fadeIn: PropTypes.bool,
  slideIn: PropTypes.bool
}

export default Animate
