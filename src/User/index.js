import React from 'react';
import styles from './styles.js'

export default (props) => {
  return(
    <div style={{...styles.container, ...props.style}}>
      <img alt='user' style={styles.image} src={props.image} />
    </div>
  )
}
