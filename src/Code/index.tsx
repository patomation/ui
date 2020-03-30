import * as React from 'react'
import { FunctionComponent, ReactNode } from 'react'
import styles from './styles'
import concat from '../_utility/concat'

interface Props {
  children?: [ReactNode] | ReactNode
  className?: string
  block?: string
  background?: string
  color?: string
  style?: object
}

/**
* A component for displaying code samples
*/
const Code: FunctionComponent<Props> = ({
  className, block,
  children,
  background = '#333', color = '#ffffff', style
}) =>

  <div
    className={concat('code', className)}
    style={{
      ...styles.container,
      ...(background ? { background: background } : null),
      ...(color ? { color: color } : null),
      borderRadius: '0.5rem',
      ...style
    }}>

    <pre>
      <code>

        { children || block }

      </code>
    </pre>
  </div>

export default Code
