import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../_utility/concat.js'
import extract from '../_utility/extract.js'
import config from '../config.js'
/**
* A spacer component that adds a standard amount of padding between things
*/
const Gutter = ({
  className, style, disabled, vertical, half
}) => {
  const Tag = vertical ? 'span' : 'div'

  const { number, unit } = extract(config.size.gutters)
  const padding = `${number * (half === true ? 0.5 : 1) }${unit}`

  return disabled !== true
    ? <Tag
      className={concat('gutter', className)}
      style={{
        ...(vertical === true
          ? {
            ...styles.vertical,
            paddingLeft: padding
          }
          : {
            ...styles.horizontal,
            paddingBottom: padding
          }),
        ...style
      }}>
    </Tag>
    : null
}

Gutter.propTypes = {
  /**
  * Exposes ability to set a custom class name
  **/
  className: PropTypes.string,
  style: PropTypes.object,
  /**
  * A way to disable the padding style without having to remove the element
  **/
  disabled: PropTypes.bool,
  /**
  * Vertical gutter spacing option
  **/
  vertical: PropTypes.bool,
  /**
  * devides the gutter amount in half
  **/
  half: PropTypes.bool
}

export default Gutter
