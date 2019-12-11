import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../_utility/concat.js'
import posed from 'react-pose'
import { Panel, Image, Icon, Shape, Gutter, Center } from '../'

const Box = posed.div({
  hover: {
    transform: 'translateY(-3px)',
    transition: { type: 'spring', stiffness: 100 }
  },
  nohover: {
    transform: 'translateY(0px)',
    transition: { type: 'spring', stiffness: 100 }
 }
})

/**
* A ui card component that displays an image title and text
*/
const Card = ({
  className,
  background, color, style,
  image, alt = '', icon,
  title, description, footer, children,
  onClick
}) => {

  const [ hover, setHover ] = useState(false)

  return (
  <Box
    className={concat('card', className)}
    style={{display: 'flex'}}
    pose={ hover ? "hover" : "nohover" }
    onClick={onClick} >

  <Panel
    style={{
      ...styles.container,
      cursor: 'pointer',
      ...(background ? { background: background } : null),
      ...(color ? { color: color } : null),
      ...style
    }}
    containerStyle={{ margin: 0 }}
    contentStyle={styles.content}
    onMouseEnter={() => { setHover(true) }}
    onMouseLeave={() => { setHover(false) }}>

    { image
      ? <Image
        className='card__image'
        src={image}
        alt={alt}
        rectangle />
      : <Shape rectangle background='gray'>
          { icon
            ? <Center style={{textAlign:'center'}}>
                <Icon name={icon} responsive style={{width:'33%'}} />
              </Center>
            : null
          }
        </Shape>
    }


    <div style={{
      padding:'1rem'
    }}>

      { title
        ? <h3
            style={{
              textDecoration: hover ? 'underline' : 'none'
            }}>
            { title }
          </h3>

        : <div
            style={{
              background: 'gray',
              height: '1rem'
            }}></div>
      }
      <Gutter half/>
      { description
        ? <p>{ description }</p>
        : <>
          <div
            style={{
              background: 'silver',
              height: '0.75rem'
            }}></div>
          <Gutter half/>
          <div
            style={{
              background: 'silver',
              height: '0.75rem'
            }}></div></>
        }

    </div>

    { footer || children
      ? <div
        className='card__footer'
        style={styles.footer}>
        {footer || children}
      </div>
      : null }

  </Panel>
  </Box>
)}

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
  /**
  * Card image at the top
  **/
  image: PropTypes.string,
  /**
  * Image alt text
  **/
  alt: PropTypes.string,
  /**
  * an icon can be used instead of using an image
  **/
  icon: PropTypes.string
}

export default Card
