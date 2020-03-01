import * as React from 'react'
import * as PropTypes from 'prop-types'
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
}
/**
* an icon that spins
*/
const Spinner: FunctionComponent<Props> = ({
  icon, className, background, color, style
}) => {
  return (
    <div className={concat('spinner', className)}>
      <style>{styles.keyframes.spinCounterClockwise}</style>

      <Icon
        className='spinner__icon'
        name={icon || 'sync'}
        style={{
          ...styles.container,
          ...(background ? { background: background } : null),
          ...(color ? { color: color } : null),
          ...style
        }} />
    </div>
  )
}

if (process.env.NODE_ENV !== 'production') {
  Spinner.propTypes = {
  /**
  * Exposes ability to set a custom class name
  **/
    className: PropTypes.string,
    icon: PropTypes.string,
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
    style: PropTypes.object
  }
}

export default Spinner
