import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import { Gutter } from '../'

const List = ({
  className, children, data,
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

      {children ? React.Children.map(children, (child, index) =>
        <li
          key={`item_${index}`}
          style={{
            ...styles.item,
            ...itemStyle
          }}>

          {child}

          { index !== children.length-1 ? <Gutter/> : null }

        </li>
      ) : null}


    </ul>
  )
}

List.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  style: PropTypes.object,
  listStyle: PropTypes.object,
  itemStyle: PropTypes.object
}

export default List
