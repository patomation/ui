import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'

const Content = ({
  className, children,
  background, color, style
}) => {
  return (
    <main
      className={className}
      style={{
        ...styles.container,
        ...(background ? { background: background } : null),
        ...(color ? { color: color } : null),
        ...style
      }}>

      {children}

    </main>
  )
}

Content.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  background: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object
}

export default Content
