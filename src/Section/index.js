import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../_utility/concat.js'

const Section = ({
  className, children, style
}) =>

  <section
    className={concat('section', className)}
    style={{
      ...styles.container,
      ...style
    }}>

    {children}

  </section>

Section.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  style: PropTypes.object
}

export default Section
