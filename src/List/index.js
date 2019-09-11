import React from 'react';
import styles from './styles.js'

export default (props) => {

  const {
    className, data,
    style, listStyle, itemStyle
   } = props;

  return(
    <ul
      className={className}
      style={{
        ...styles.list,
        ...style,
        ...listStyle
      }}>

      {data.map( (item, index) =>
        <li
          key={`item_${index}`}
          style={{
            ...styles.item,
            ...itemStyle
          }}>

            {item}

        </li>
      )}

    </ul>
  )
}
