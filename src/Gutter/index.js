import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../_utility/concat.js'

const Gutter = ({
  className, style, disabled, vertical
}) => {
  const Tag = vertical ? 'span' : 'div'

  return disabled !== true
    ? <Tag
      className={concat('gutter', className)}
      style={{
        ...styles.horizontal,
        ...(vertical === true ? styles.vertical : null),
        ...style
      }}>
    </Tag>
    : null
}

Gutter.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  vertical: PropTypes.bool
}

export default Gutter
