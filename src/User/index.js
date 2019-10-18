import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../../utility/concat.js'
import config from '../config'
import { Icon, Image } from '../'

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
  className: PropTypes.string,
  style: PropTypes.object,
  image: PropTypes.string
}

export default User
