import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../_utility/concat.js'
import { Gutter } from '../'
/**
* fancy ul list component
*/
const List = ({
  className, children, data,
  style, listStyle, itemStyle
}) => {
  return (
    <ul
      className={concat('list', className)}
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

          { index !== children.length - 1 ? <Gutter/> : null }

        </li>
      ) : null}

    </ul>
  )
}

List.propTypes = {
  /**
  * Exposes ability to set a custom class name
  **/
  className: PropTypes.string,
  data: PropTypes.array,
  /**
  * Individual component or set of components accepted as children
  **/
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  /**
  * Set any styles of the top level element of the component
  **/
  style: PropTypes.object,
  listStyle: PropTypes.object,
  itemStyle: PropTypes.object
}

export default List
