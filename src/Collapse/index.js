import React, { useState, useEffect } from 'react'
import styles from './styles.js'

const Collapse = ({
  className, children, style,
  collapse, onComplete
}) => {
  const speed = 400

  const [height, setHeight] = useState(null)
  let element = null
  useEffect(() => {
    if (element) {
      setHeight(`${element.clientHeight}px`)
    }
    // Callback when animation completes
    if (collapse && onComplete) setTimeout(onComplete, speed)
  }, [collapse, onComplete, element])

  return (
    <div
      ref={ elm => {
        element = elm
      }}
      className={className}
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

export default Collapse
