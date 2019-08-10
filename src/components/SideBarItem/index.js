import React, {useState} from 'react';
import styles from './styles.js'

import Icon from '../Icon';


export default (props) => {

  const [hover, setHover] = useState(false);
  const { className, onClick, background, color, icon, style, hoverStyle, title } = props;

  return(
    <button
      className={className}
      onClick={onClick}
      onMouseEnter={()=>{
        setHover(true);
      }}
      onMouseLeave={()=>{
        setHover(false);
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
