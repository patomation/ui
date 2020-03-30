import * as React from 'react'
import { FunctionComponent, ReactNode, ReactElement } from 'react'
import styles from './styles'
import concat from '../_utility/concat'
import config from '../config'

interface Props {
  children?: [ReactNode] | ReactNode
  className?: string
  style?: object
  gap?: boolean
}

/**
* display flex row
*/
const Row: FunctionComponent<Props> = ({
  className, children, style, gap
}) =>

  <div
    className={concat('row', className)}
    style={{
      ...styles.container,
      ...style
    }}>

    { gap
      ? React.Children.map(children, child => {
        return React.cloneElement(
          child as ReactElement<any>,
          {
            style: {
              marginRight: config.size.gutters
            }
          })
      })
      : children
    }

  </div>

export default Row
