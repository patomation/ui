import React, {useState} from 'react';
import styles from './styles.js'

import Icon from '../Icon';


export default (props) => {

  const [hover, setHover] = useState(false);
  const { className, onClick, background, color, icon, style, hoverStyle, title, onHover } = props;

  return(
    <button
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
        ...styles.container,
        ...( background ? { background: background } : null ),
        ...( color ? { color: color } : null ),
        ...( hover ? {...styles.hover, ...hoverStyle} : null ),
        ...style
      }}>

        <div style={styles.iconContainer}>
          <Icon name={icon} />
        </div>

        <div style={styles.titleContainer}>
          <div style={styles.title}>{title}</div>
        </div>

    </button>
  )
}
