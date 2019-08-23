import React, {useState, useEffect} from 'react';
import styles from './styles.js'

export default (props) => {

  const [hover, setHover] = useState(false);
  const [touched, setTouched] = useState(false);
  const [active, setActive] = useState(props.active || false);

  //Allow it to be set to active from the ouseside
  useEffect(()=>{
    setActive(props.active)
  },[props.active])

  const {
    className, type, disabled,
    onClick, onMouseDown, onMouseUp, onTouchStart, onTouchEnd,
    onDown, onUp,
    children, title,
    background, color, style,
    hoverStyle, disabledStyle, activeStyle,
    onHover, kind
  } = props;

  const handleDown = () => {
    //Make ui active
    setActive(true);
    //Handle callback
    if(onDown) onDown();
  }

  const handleUp = () => {
    //Make ui de-active
    setActive(false);
    //Handle callback
    if(onUp) onUp();
  }

  return(
    <button
      type={type}
      disabled={disabled}
      className={className}
      onTouchStart={() => {
        handleDown();
        setTouched(true);
        //Expose event to the oustide
        if (onTouchStart) onTouchStart();
      }}
      onTouchEnd={() => {
        handleUp()
        //Expose event to the oustide
        if (onTouchEnd) onTouchEnd();
       }}
      onMouseDown={() => {
        //Ignore this event if touched
        if(!touched) {
          handleDown();
          //Expose event to the oustide
          if (onMouseDown) onMouseDown();
        }
      }}
      onMouseUp={() => {
        //Ignore this event if touched
        if(!touched) {
          handleUp();
          //Expose event to the oustide
          if (onMouseUp) onMouseUp();

        //Since onMouseUp gets called with touch events set touched false here...
        } else {
          setTouched(false);
        }
      }}
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
        ...( hover ? hoverStyle : null),
        ...( active ? (styles.kind[ kind || 'normal' ].active || activeStyle) : null),
      }}>

        { children || title }

    </button>
  )
}
