import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import Hr from '../Hr'

const Panel = ({
  className, children, header, style
}) => {
  return (
    <div
      className={className}
      style={{
        ...styles.container,
        ...style
      }}>

      {(header
        ? <div style={styles.header}>

          {header}

        </div> : null)}
      {(header ? <Hr /> : null)}

      <div style={styles.content}>
        {children}
      </div>

    </div>
  )
}

Panel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  header: PropTypes.string,
  style: PropTypes.object
}

export default Panel
