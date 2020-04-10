import * as React from 'react'
import { ReactNode, FunctionComponent } from 'react'
import styles from './styles'
import concat from '../_utility/concat'
import config from '../config'
import { Face } from '../icons/index'
import Image from '../Image'

interface Props {
  children?: [ReactNode] | ReactNode
  className?: string
  style?: object
  image?: string | ReactNode
  onClick?: () => void
}

/**
* user icon or user photo component
*/
const Avatar: FunctionComponent<Props> = ({
  className, style, image, onClick
}) => {
  return (
    <div
      className={concat('avatar', className)}
      style={{
        ...styles.container,
        ...(!image ? { background: '#ffffff' } : null),
        ...style
      }}
      onClick={onClick}>
      { image
        ? typeof image === 'string'
          // handle image src strings
          ? <Image
            square
            className='user__image'
            alt='user'
            style={styles.image}
            src={image} />
          // Handle react image elements
          : image
        // If no image defined use an icon
        : <Face color={config.color.primary} responsive />
      }
    </div>
  )
}

export default Avatar
