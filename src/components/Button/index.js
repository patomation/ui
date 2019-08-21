import React, {useState} from 'react';
import styles from './styles.js'

export default (props) => {

  const [hover, setHover] = useState(false);
  const {
    className, type, disabled, onClick,
    children, title,
    background, color, style, hoverStyle, disabledStyle,
    onHover, kind
  } = props;

  return(
    <button
      type={type}
      disabled={disabled}
      className={className}
      onClick={onClick}
      onMouseEnter={()=>{
        setHover(true);
        if(onHover) onHover(true);
      }}
      onMouseLeave={()=>{
        setHover(false);
        if(onHover) onHover(false);
      }}
      style={{
        ...styles.default,
        ...( styles.kind[ kind || 'normal' ]),
        ...( background ? { background: background } : null ),
        ...( color ? { color: color } : null),
        ...style,
        ...( hover ? (styles.kind[ kind || 'normal' ].hover) : null),
        ...( disabled ? ( styles.kind[ kind || 'normal' ].disabled || disabledStyle ) : null),
        ...( hover ? hoverStyle: null),
      }}>

        { children || title }

    </button>
  )
}
