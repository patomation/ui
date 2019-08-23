import React, {useState} from 'react';
import styles from './styles.js';
import keys from './keys.js';
import hotkey from 'hotkey';

import Grid from '../Grid'
import Button from '../Button'

export default (props) => {

  const {
    className, children,
    background, color, style,
    onDown, onUp,
  } = props;

  return(
    <div
      className={className}
      style={{
        ...styles.container,
        ...( background ? { background: background } : null ),
        ...( color ? { color: color } : null ),
        ...style
      }}>

      <h2> Keyboard </h2>

      <Grid col={30} gap={'5px'}>
        {keys.map( (key, index) => {
          const { name, span } = key;
          const [ active, setActive ] = useState(false);

          const handleDown = () => {
            if(onDown) onDown(name.toLowerCase())
          }

          const handleUp = () => {
            if(onUp) onUp(name.toLowerCase())
          }

          //Set hotkey
          hotkey(name.toLowerCase())
          .down(() => {
            //Set button active if hotkey used
            setActive(true);
            handleDown();
          })
          .up(() => {
            //Set button to deactive after hotkey used
            setActive(false);
            handleUp();
          })

          return <Button
            onDown={handleDown}
            onUp={handleUp}
            active={active}
            key={`key_${index}`}
            style={{
              //Makes button into grid item
              gridColumn: `auto / span ${span}`,
              //For better centering
              paddingLeft: 0,
              paddingRight: 0,
            }}>
            {name}
          </Button>
        })}
      </Grid>
    </div>
  )
}
