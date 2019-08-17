import React from 'react';
import styles from './styles.js'

export default (props) => {

  const { className, style, disabled } = props;

  if(disabled !== true) {
    return(

      <div
        className={className}
        style={{
          ...styles.container,
          ...style
        }}>
      </div>

    )
  } else {
    return null
  }

}
