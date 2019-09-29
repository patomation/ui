import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../../utility/concat.js'
import ReactSlick from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { IconButton } from '../'

const Arrow = ({ className, style, onClick, to, color }) => {
  return (
    <IconButton
      className={concat('carousel__arrow', 'slick-arrow')}
      onClick={onClick}
      color={color || 'white'}
      name={to === 'next' ? 'keyboard_arrow_right' : 'keyboard_arrow_left'}
      width='3rem'
      iconStyle={{
        top: '50%'
      }}
      style={{
        ...style,
        ...styles.arrow,
        ...(to === 'next' ? { right: 0 } : null),
        ...(to === 'prev' ? { left: 0 } : null)
      }}/>)
}

Arrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
  to: PropTypes.string,
  color: PropTypes.string
}

const Carousel = ({
  className, children,
  background, color, style,
  autoplay, autoplaySpeed,
  arrows
}) =>
  typeof children !== 'string'
    ? <ReactSlick
      className={concat('carousel', className)}
      style={{
        ...styles.container,
        ...(background ? { background: background } : null),
        ...(color ? { color: color } : null),
        ...style
      }}
      {...{
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: arrows === undefined ? true : arrows,
        nextArrow: <Arrow to='next'/>,
        prevArrow: <Arrow to='prev'/>
      }}
      autoplay={autoplay === undefined ? true : autoplay}
      autoplaySpeed={autoplaySpeed || 3000}>

      {children}

    </ReactSlick>
    : null

Carousel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  background: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
  autoplay: PropTypes.bool,
  autoplaySpeed: PropTypes.number,
  arrows: PropTypes.bool
}

export default Carousel
