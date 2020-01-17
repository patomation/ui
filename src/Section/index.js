import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../_utility/concat.js'
import { ScrollButton, Center } from '../'
/**
* fancy content section component to use with Hero
*/
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
          ...(maxWidth ? { maxWidth } : null)
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

if (process.env.NODE_ENV !== 'production') {
  Section.propTypes = {
  /**
  * Exposes ability to set a custom class name
  **/
    className: PropTypes.string,
    /**
  * Individual component or set of components accepted as children
  **/
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    /**
  * Set any styles of the top level element of the component
  **/
    style: PropTypes.object,
    /**
  * The background color of component
  **/
    background: PropTypes.string,
    /**
  * The text color of component
  **/
    color: PropTypes.string,
    height: PropTypes.number,
    maxWidth: PropTypes.string
  }
}

export default Section
