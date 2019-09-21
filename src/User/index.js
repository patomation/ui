import React from 'react'
import styles from './styles.js'

 const User = ({
   style, image
 }) => {
  return(
    <div style={{...styles.container, ...style}}>
      <img alt='user' style={styles.image} src={image} />
    </div>
  )
}

export default User
