import React, {useState} from 'react'
import styles from './styles.js'

const Link = ({
  className, children,
  onClick, background,
  color, style, href, hoverStyle,
  onHover
}) => {

  const [hover, setHover] = useState(false)

  return(
    <a
      onMouseEnter={()=>{
        setHover(true)
        if(onHover) onHover(true)
      }}
      onMouseLeave={()=>{
        setHover(false)
        if(onHover) onHover(false)
      }}
      href={href}
      onClick={onClick}
      className={className}
      style={{
        ...styles.container,
        ...( background ? { background: background } : null ),
        ...( color ? { color: color } : null ),
        ...style,
        ...( hover ? { ...styles.hover, ...hoverStyle } : null)
      }}>

      {children}

    </a>
  )
}

export default Link
