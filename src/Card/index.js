import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../_utility/concat.js'
import { Panel, Image } from '../'
/**
* A ui card component that displays an image title and text
*/
const Card = ({
  className,
  children, middle, bottom,
  background, color, style,
  image, alt
}) =>

  <Panel
    className={concat('card', className)}
    style={{
      ...styles.container,
      ...(background ? { background: background } : null),
      ...(color ? { color: color } : null),
      ...style
    }}
    containerStyle={{ margin: 0 }}
    contentStyle={styles.content}>

    <Image className='card__image' src={image} alt={alt} rectangle />

    { middle || children
      ? <div
        className='card__middle'
        style={styles.middle}>
        {middle || children}
      </div>
      : null }

    {bottom
      ? <div
        className='card__bottom'
        style={styles.bottom}>
        {bottom}
      </div>
      : null }

  </Panel>

Card.propTypes = {
  /**
  * Exposes ability to set a custom class name
  **/
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  middle: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  bottom: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  background: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
  image: PropTypes.string,
  alt: PropTypes.string
}

export default Card
