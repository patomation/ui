import React from 'react'
import PropTypes from 'prop-types'
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

List.propTypes = {
  className: PropTypes.string,
  data: PropTypes.string,
  style: PropTypes.object,
  listStyle: PropTypes.object,
  itemStyle: PropTypes.object
}

export default List
