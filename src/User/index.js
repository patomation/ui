import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../_utility/concat.js'
import config from '../config'
import { Icon, Image } from '../'
/**
* user icon or user photo component
*/
const User = ({
  className, style, image
}) => {
  return (
    <div
      className={concat('user', className)}
      style={{
        ...styles.container,
        ...(!image ? { background: '#ffffff' } : null),
        ...style
      }}>
      { image
        ? <Image
          square
          className='user__image'
          alt='user'
          style={styles.image}
          src={image} />
        : <Icon name='face' color={config.color.primary} responsive />
      }
    </div>
  )
}

User.propTypes = {
  /**
  * Exposes ability to set a custom class name
  **/
  className: PropTypes.string,
  style: PropTypes.object,
  image: PropTypes.string
}

export default User
