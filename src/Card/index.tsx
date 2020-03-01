import * as React from 'react'
import { useState, FunctionComponent, ReactNode } from 'react'
import * as PropTypes from 'prop-types'
import styles from './styles'
import concat from '../_utility/concat'
import posed from 'react-pose'
import config from '../config'

import Panel from '../Panel'
import Image from '../Image'
import Icon from '../Icon'
import Shape from '../Shape'
import Center from '../Center'

interface Props {
  children?: [ReactNode] | ReactNode
  className?: string
  footer?: [ReactNode] | ReactNode
  background?: string
  color?: string
  style?: object
  border?: boolean
  image?: string | ReactNode
  cover?: ReactNode
  alt?: string
  icon?: string | ReactNode
  iconColor?: string
  iconBackground?: string
  title?: string
  description?: string
  onClick?: (MouseEvent) => {}
  clickable?: boolean
}

const PoseDiv = posed.div({
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
const Card: FunctionComponent<Props> = ({
  className,
  background, color = '#000000', style, border,
  image, alt = '', icon, cover,
  iconColor, iconBackground,
  title, description, footer, children,
  onClick, clickable
}) => {
  const [hover, setHover] = useState(false)
  // onClick or clickable boolion will make ui clickable
  const isClickable = onClick ? true : clickable

  return (
    <PoseDiv
      pose={ hover ? 'hover' : 'nohover' }
      className={concat('card', className)}
      style={{
        display: 'flex',
        ...style
      }}
      onClick={onClick} >

      <Panel
        style={{
          ...styles.container,
          ...(isClickable ? { cursor: 'pointer' } : null),
          ...(background ? { background: background } : null),
          display: 'inline-block',
          ...(color ? { color: color } : null),
          ...(!border ? {
            border: 0,
            boxShadow: 'none'
          } : null)
        }}
        containerStyle={{ margin: 0 }}
        contentStyle={styles.content}
        onMouseEnter={() => {
          if (isClickable) {
            setHover(true)
          }
        }}
        onMouseLeave={() => {
          setHover(false)
        }}>

        { cover || (typeof image === 'string'
          ? <Image
            className='card__image'
            src={image}
            alt={alt}
            rectangle />
          : image || <Shape
            rectangle
            background={iconBackground || (icon ? '#ffffff' : 'gray')}>
            { icon
              ? <Center style={{ textAlign: 'center' as 'center' }}>
                { typeof icon === 'string'
                  ? <Icon
                    name={icon}
                    color={iconColor || config.color.primary}
                    responsive
                    style={{ width: '33%' }} />
                  : icon
                }
              </Center>
              : null
            }
          </Shape>)
        }

        <div style={{
          padding: '1rem'
        }}>

          { title
            ? <h3
              style={{
                textDecoration: hover ? 'underline' : 'none',
                display: 'inline-block', // Prevents external <a> tags from underlining
                width: '100%'
              }}>
              { title }
            </h3>

            : null }

          { description
            ? <p
              style={{
                paddingTop: '0.5rem',
                display: 'inline-block', // Prevents external <a> tags from underlining
                width: '100%'
              }}>
              { description }
            </p>
            : null }

        </div>

        { footer || children
          ? <div
            className='card__footer'
            style={styles.footer}>
            {footer || children}
          </div>
          : null }

      </Panel>
    </PoseDiv>
  )
}

if (process.env.NODE_ENV !== 'production') {
  Card.propTypes = {
    /**
    * Exposes ability to set a custom class name
    **/
    className: PropTypes.string,
    /**
    * Individual component or set of components accepted as children
    **/
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    /**
    * like children any element can be used and it will put the item at the bottom of the card
    **/
    footer: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
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
    style: PropTypes.object,
    /**
    * The ability to turn off the border and boxshadow
    **/
    border: PropTypes.bool,
    /**
    * Card image at the top can be a source string
    **/
    image: PropTypes.string,
    /**
    * Card cover will replace the image or icon as the top element. use components
    **/
    cover: PropTypes.node,
    /**
    * Image alt text
    **/
    alt: PropTypes.string,
    /**
    * an icon component or string name of a material icon can be used instead of an image
    **/
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /**
    * icon color
    **/
    iconColor: PropTypes.string,
    /**
    * icon background color
    **/
    iconBackground: PropTypes.string,
    /**
    * card title h3
    **/
    title: PropTypes.string,
    /**
    * a short description
    **/
    description: PropTypes.string,
    /**
    * on click event function prop
    **/
    onClick: PropTypes.func,
    /**
    * just case you dont want to use onclick but still want the ui to hover and look clickable
    **/
    clickable: PropTypes.bool
  }
}

export default Card
