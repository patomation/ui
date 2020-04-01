import * as React from 'react'
import { FunctionComponent } from 'react'
import styles from './styles'
import concat from '../_utility/concat'
import Icon from '../Icon'

interface Props {
  className?: string
  icon?: string
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

      <Icon
        className='spinner__icon'
        name={icon || 'sync'}
        style={{
          ...styles.container,
          ...(background ? { background: background } : null),
          ...(color ? { color: color } : null),
          ...iconStyle
        }} />
    </span>
  )
}

export default Spinner
