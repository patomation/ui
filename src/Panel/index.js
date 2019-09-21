import React from 'react'
import styles from './styles.js'
import Hr from '../Hr'

export default (props) => {

  const { className, children, header, style } = props

  return(
    <div
      className={className}
      style={{
        ...styles.container,
        ...style}}>

      {(header ?
        <div style={styles.header}>

          {header}

        </div> : null)}
      {(header ? <Hr /> : null)}

      <div style={styles.content}>
        {children}
      </div>

    </div>
  )
}
