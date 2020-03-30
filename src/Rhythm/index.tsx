import * as React from 'react'
import { FunctionComponent, ReactNode } from 'react'
import styles from './styles'
import ratio from '../_utility/ratio'

interface Props {
  children?: [ReactNode] | ReactNode
}

/**
* A component used to try to set the vertical rhythm of h1-6 and p components used as children
**/
const Rhythm: FunctionComponent<Props> = ({
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

interface Props {
  children?: [ReactNode] | ReactNode
  
}
      }
    `}
    </style>

    {children}

  </article>

export default Rhythm
