import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../../utility/concat.js'

const User = ({
  className, style, image
}) => {
  return (
    <div
      className={concat('user', className)}
      style={{ ...styles.container, ...style }}>
      <img
        className='user__image'
        alt='user'
        style={styles.image}
        src={image} />
    </div>
  )
}

User.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  image: PropTypes.string
}

export default User
