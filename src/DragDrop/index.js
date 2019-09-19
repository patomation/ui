import React from 'react';
import styles from './styles.js'

import useToggle from '@patomation/usetoggle';

export default (props) => {

  const {
    className, children,
    background, color, style,
    onDragStart, onDragOver, onDrop, onDragLeave, onDrag,
    draggable,
  } = props;

  const [over, setOver] = useToggle(false);

  return(
    <div
      className={className}
      draggable={draggable !== undefined ? draggable : true} //Use draggable prop but default to true
      onDragStart={onDragStart}
      onDrag={onDrag}
      onDragOver={(e)=>{
        //Lets us drop stuff here
        e.preventDefault();
        //Allow only one drg over event at one time.
        //Prevent retriggering
        if(!over) {
          setOver(true);
          if(onDragOver) onDragOver(e);
        }
      }}
      onDragLeave={()=>{
        setOver(false);
        if(onDragLeave) onDragLeave();
      }}
      onDrop={onDrop}
      style={{
        ...styles.container,
        ...( background ? { background: background } : null ),
        ...( color ? { color: color } : null ),
        ...style
      }}>

      {children}

    </div>
  )
}
