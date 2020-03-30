import * as React from 'react'
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

export default List
