import React from 'react'
import styles from './styles.js'

const List = ({
  className, data,
  style, listStyle, itemStyle
}) => {
  return (
    <ul
      className={className}
      style={{
        ...styles.list,
        ...style,
        ...listStyle
      }}>

      {data ? data.map((item, index) =>
        <li
          key={`item_${index}`}
          style={{
            ...styles.item,
            ...itemStyle
          }}>

          {item}

        </li>
      ) : null}

    </ul>
  )
}

export default List
