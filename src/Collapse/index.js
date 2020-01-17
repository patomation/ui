import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../_utility/concat.js'
/**
* A component that can collapse and hide content
*/
const Collapse = ({
  className, children, style,
  collapse, onComplete, speed = 400
}) => {
  const [height, setHeight] = useState(null)
  let element = null
  useEffect(() => {
    if (element) {
      setHeight(`${element.clientHeight}px`)
    }
    // Callback when animation completes
    if (collapse && onComplete) setTimeout(onComplete, speed)
  }, [collapse, onComplete, element, speed])

  return (
    <div
      ref={ elm => {
        element = elm
      }}
      className={concat('collapse', className)}
      style={{
        ...styles.container,
        ...{
          transition: `width ${speed}ms ease-out, height ${speed}ms ease-out`,
          height: (collapse ? '0px' : height)
        },
        ...style
      }}>

      {children}

    </div>
  )
}

if (process.env.NODE_ENV !== 'production') {
  Collapse.propTypes = {
    /**
    * Exposes ability to set a custom class name
    **/
    className: PropTypes.string,
    /**
    * Individual component or set of components accepted as children
    **/
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    /**
    * Set any styles of the top level element of the component
    **/
    style: PropTypes.object,
    collapse: PropTypes.bool,
    onComplete: PropTypes.func,
    speed: PropTypes.number
  }
}

export default Collapse
