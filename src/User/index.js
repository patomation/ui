import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../_utility/concat.js'
import config from '../config'

import Icon from '../Icon'
import Image from '../Image'

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

if (process.env.NODE_ENV !== 'production') {
  User.propTypes = {
  /**
    * Exposes ability to set a custom class name
    **/
    className: PropTypes.string,
    /**
    * Set any styles of the top level element of the component
    **/
    style: PropTypes.object,
    image: PropTypes.string
  }
}

export default User
