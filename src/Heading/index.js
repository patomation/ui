import React from 'react'
import styles from './styles.js'

const Heading = ({
  Tag, className, onClick, children,
  background, color, style
}) => {

  return(
    <Tag
      className={className}
      onClick={onClick}
      style={{
        ...styles.container,
        ...( background ? { background: background } : null ),
        ...( color ? { color: color } : null ),
        ...style
      }}>

      {children}

    </Tag>
  )
}

export default Heading
