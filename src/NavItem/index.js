import React from 'react'
import styles from './styles.js'

import Link from '../Link'

export default (props) => {

  const { className, children, onClick, href, title, active, background, color, style } = props

  return(
    <Link
      href={href}
      onClick={onClick}
      className={className}
      style={{
        ...styles.container,
        ...( background ? { background: background } : null ),
        ...( color ? { color: color } : null ),
        ...( active ? { opacity: 1 } : null ),
        ...style
      }}>

      { children || title }

      <div style={{
        ...styles.bottomBar,
        ...{
          background: ( active ? '#ffffff' : null )
        }}
      }></div>

    </Link>
  )
}
