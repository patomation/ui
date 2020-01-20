import * as React from 'react'
import * as PropTypes from 'prop-types'
import { FunctionComponent, ReactNode } from 'react'
import styles from './styles'

interface Props {
  children?: [ReactNode] | ReactNode
  background?: string
  color?: string
  style?: object
  lines?: number
}

const Skeleton: FunctionComponent<Props> = ({
  background, color, style, lines = 1
}) =>

  <div
    className={'skeleton'}
    style={{
      ...styles.container,
      ...(background ? { background: background } : null),
      ...(color ? { color: color } : null),
      ...style
    }}>
    { new Array(lines).fill(0).map((_, index) => {
      return <div
        className={'skeleton__line'}
        key = {'line' + index}
        style={{
          background: 'rgba(0,0,0,0.2)',
          height: '0.5rem',
          marginBottom: '0.4rem'
        }}></div>
    })}

  </div>

if (process.env.NODE_ENV !== 'production') {
  Skeleton.propTypes = {
  /**
  * The background color of component
  **/
    background: PropTypes.string,
    /**
  * The text color of component
  **/
    color: PropTypes.string,
    /**
  * Set any styles of the top level element of the component
  **/
    style: PropTypes.object,
    lines: PropTypes.number
  }
}

export default Skeleton
