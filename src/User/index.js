import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'

const User = ({
  style, image
}) => {
  return (
    <div style={{ ...styles.container, ...style }}>
      <img alt='user' style={styles.image} src={image} />
    </div>
  )
}

User.propTypes = {
  style: PropTypes.object,
  image: PropTypes.string
}

export default User
