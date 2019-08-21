import React, {useEffect, useState} from 'react';
import styles from './styles.js'

export default (props) => {

  const {
    className, children, onClick,
    background, color, style
  } = props;

  return(
    <nav
      onClick={onClick}
      className={className}
      style={{
        ...styles.container,
        ...( background ? { background: background } : null ),
        ...( color ? { color: color } : null ),
        ...style
      }}>

      {React.Children.map( children, (child, index) => {

        return React.cloneElement( (child),{
          ...{
            style: styles.item,
            children: (
              <>
                {child.props.children}
                <div style={{
                  ...styles.bottomBar
                }}></div>
              </>)},
          ...( child.type !== 'a' ? { activeStyle:{opacity: '1'} } : null )
        })
      })}

    </nav>
  )
}
