import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import { Row, Icon, Clicable } from '../'
import config from '../config'

const Alert = ({
  children,
  background, color, style,
  type = 'info'
}) => {



  return (

  <Row
    className={'alert'}
    style={{
      ...styles.container,
      background: background || config.color[`${type}Background`],
      ...(color ? { color: color } : null),
      padding: '0.75rem',
      paddingRight: '1rem',
      marginBottom: '1rem',
      border: `1px solid ${color || config.color[type]}`,
      borderRadius: '3px',
      position: 'relative',
      ...style
    }}>

    <Icon
      className='alert__icon'
      color={color || config.color[type]}
      name='error'
      style={{
        paddingRight: '0.75rem'
      }}/>

    <div
      className='alert__content'
      style={{
        width: '80%'
      }}>

      {children}
    </div>
    <Icon
      className='alert__close'
      name='close'
      color='rgba(0,0,0,0.5)'
      style={{
        position: 'absolute',
        right: '0.75rem',
        top: '0.75rem'
      }} />

  </Row>
)}

Alert.propTypes = {
  className: PropTypes.string,
  /**
  * Individual component or set of components accepted as children
  **/
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  onClick: PropTypes.func,
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

export default Alert
