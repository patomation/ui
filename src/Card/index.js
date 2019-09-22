import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'

import { Panel, Grid, Image, Center, Gutter } from '../'

const Card = ({
  className,
  children, middle, bottom,
  background, color, style,
  image, alt,
}) =>

  <Panel
    className={className}
    style={{
      ...styles.container,
      ...( background ? { background: background } : null ),
      ...( color ? { color: color } : null ),
      ...style
    }}
    containerStyle={{margin: 0}}
    contentStyle={{
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'nowrap',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      alignContent: 'stretch',
      height: '100%',
    }}>

    <Image src={image} alt={alt} rectangle />

    { middle || children ?
      <div style={{
        padding: '1rem',
        flex: '1 1 auto'
      }}>
        {middle || children}
      </div>
    : null }

    {bottom ?
      <div style={{
        paddingBottom: '1rem',
        paddingLeft: '1rem',
        paddingRight: '1rem'
      }}>
        {bottom}
      </div>
    : null }

  </Panel>

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  middle: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  bottom: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  background: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
  image: PropTypes.string,
  alt: PropTypes.string,
}


export default Card