import React, {useState} from 'react';
import styles from './styles.js'

export default (props) => {

  const [hover, setHover] = useState(false);
  const { className, onClick, children, background, color, style, hoverStyle, type, onHover } = props;

  return(
    <button
      className={className}
      onClick={onClick}
      onMouseEnter={()=>{
        setHover(true);
        onHover(true);
      }}
      onMouseLeave={()=>{
        setHover(false);
        onHover(false);
      }}
      style={{
        ...styles.default,
        ...( styles.type[ type || 'normal' ]),
        ...( background ? { background: background } : null ),
        ...( color ? { color: color } : null),
        ...style,
        ...( hover ? (styles.type[ type || 'normal' ].hover) : null),
        ...hoverStyle
      }}>

        {children}

    </button>
  )
}
