import * as React from 'react'
import * as PropTypes from 'prop-types'
import { FunctionComponent, ReactNode } from 'react'
import styles from './styles'
import concat from '../_utility/concat'
import config from '../config'

interface Props {
  children?: [ReactNode] | ReactNode
  className?: string
  data?: any[]
  style?: object
  listStyle?: object
  itemStyle?: object
  border?: boolean
}

/**
* fancy ul list component
*/
const List: FunctionComponent<Props> = ({
  className, children, data,
  style, listStyle, itemStyle,
  border
}) => {
  return (
    <ul
      className={concat('list', className)}
      style={{
        ...styles.list,
        ...style,
        ...(border
          ? {
            border: `${config.size.borders} solid ${config.color.border}`,
            borderRadius: config.size.corners
          } : null),
        ...listStyle
      }}>

      {data ? data.map((item, index) =>
        <li
          key={`item_${index}`}
          style={{
            ...styles.item,
            padding: '0.25rem',
            ...(border && index !== React.Children.count(children) - 1
              ? {
                borderBottom: `${config.size.borders} solid ${config.color.border}`
              } : null),
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
            padding: '0.25rem',
            ...(border && index !== React.Children.count(children) - 1
              ? {
                borderBottom: `${config.size.borders} solid ${config.color.border}`
              } : null),
            ...itemStyle
          }}>

          {child}

        </li>
      ) : null}

    </ul>
  )
}

if (process.env.NODE_ENV !== 'production') {
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
    itemStyle: PropTypes.object,
    /**
    * A boolean to control if the border shows
    **/
    border: PropTypes.bool
  }
}

export default List
