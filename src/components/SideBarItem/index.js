import React, {useState} from 'react';
import styles from './styles.js'

import Icon from '../Icon';
import Grid from '../Grid';

export default (props) => {

  const [hover, setHover] = useState(false);
  const { className, onClick, background, color, icon, style, hoverStyle, title, onHover } = props;

  return(
    <Grid
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
      }}
      col={4}>

      <Icon
        name={icon}
        style={styles.icon}/>

      <div style={styles.title}>
        {title}
      </div>

    </Grid>
  )
}
