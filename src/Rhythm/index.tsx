import * as React from 'react'
import * as PropTypes from 'prop-types'
import styles from './styles'
import ratio from '../_utility/ratio'
/**
* A component used to try to set the vertical rhythm of h1-6 and p components used as children
**/
const Rhythm = ({
  children
}) =>

  <article
    className={'rhythm'}
    style={{
      ...styles.container
    }}>

    <style>
      {`
      .rhythm  h1 {
        margin-bottom: ${ratio(1, 1)}rem !important;
      }
      .rhythm  h2 {
        margin-top: ${ratio(1, 4)}rem !important;
        margin-bottom: ${ratio(1, 1)}rem !important;
      }
      .rhythm  h3 {
        margin-top: ${ratio(1, 4)}rem !important;
        margin-bottom: ${ratio(1, 0)}rem !important;
      }
      .rhythm  h4 {
        margin-top: ${ratio(1, 4)}rem !important;
        margin-bottom: ${ratio(1, 0)}rem !important;
      }
      .rhythm  h5{
        margin-top: ${ratio(1, 4)}rem !important;
        margin-bottom: ${ratio(1, 0)}rem !important;
      }
      .rhythm  h6 {
        margin-top: ${ratio(1, 4)}rem !important;
        margin-bottom: ${ratio(1, 0)}rem !important;
      }
      .rhythm p {
        margin-bottom: ${ratio(1, 1)}rem !important;
      }
    `}
    </style>

    {children}

  </article>

if (process.env.NODE_ENV !== 'production') {
  Rhythm.propTypes = {
  /**
  * Children will get vertical rhythm / padding to make it look nice
  **/
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
  }
}

export default Rhythm
