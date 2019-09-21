import React from 'react'
import styles from './styles.js'
import ReactSlick from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Carousel = ({
  className, children,
  background, color, style
}) =>

<ReactSlick
  className={className}
  style={{
    ...styles.container,
    ...( background ? { background: background } : null ),
    ...( color ? { color: color } : null ),
    ...style
  }}
  settings={{
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }}
  autoplay={true}
  autoplaySpeed={3000}>

  {children}

</ReactSlick>

export default Carousel
