import React from 'react';
import styles from './styles.js'

export default (props) => {

  const { className, children, style } = props;

  return(
    <div className={className}
      style={{
        ...styles.container,
        ...style
      }}>

      <div style={styles.content}>

        {children}

      </div>

    </div>
  )
}
