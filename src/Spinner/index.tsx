import * as React from 'react'
import { FunctionComponent, ReactNode } from 'react'
import styles from './styles'
import concat from '../_utility/concat'
import { Sync } from '../icons/Sync'

interface Props {
  className?: string
  icon?: ReactNode
  background?: string
  color?: string
  style?: object
  iconStyle?: object
}
/**
* an icon that spins
*/
const Spinner: FunctionComponent<Props> = ({
  icon, className, background, color,
  style, iconStyle
}) => {
  return (
    <span
      className={concat('spinner', className)}
      style={{
        ...style
      }}>
      <style>{styles.keyframes.spinCounterClockwise}</style>
      { icon === undefined
        ? <Sync
          className='spinner__icon'
          color={color}
          style={{
            ...styles.container,
            ...(background ? { background: background } : null),
            ...iconStyle
          }} />
        : icon
      }

    </span>
  )
}

export default Spinner
