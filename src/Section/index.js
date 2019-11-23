import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../_utility/concat.js'
import { ScrollButton, Center } from '../'

const Section = ({
  className, children, style,
  background, color,
  height, maxWidth
}) =>

  <section
    className={concat('section', className)}
    style={{
      ...styles.container,
      ...style,
      ...(background ? { background: background } : null),
      ...(color ? { color: color } : null),
      ...(height ? {
        height,
        padding: 0,
        position: 'relative'
      } : null)
    }}>

    <Center style={{ left: 0 }} disabled={!height}>
      <div
        className='section__content'
        style={{
          ...styles.content,
          ...(maxWidth ? { maxWidth} : null)
        }}>

        {children}

      </div>
    </Center>

    { height
      ? <ScrollButton
        color={color}
        style = {{
          position: 'absolute',
          bottom: 0
        }}/>
      : null }

  </section>

Section.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  style: PropTypes.object,
  background: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.number,
  maxWidth: PropTypes.string
}

export default Section
