import * as React from 'react'
import { FunctionComponent, ReactNode } from 'react'
import styles from './styles'
import concat from '../_utility/concat'
import config from '../config'

import Row from '../Row'

interface Props {
  children?: [ReactNode] | ReactNode
  className?: string
  onClick?: (MouseEvent) => {}
  background?: string
  color?: string
  style?: object
  title?: string
  abilities?: string
  contentTitle?: string
  contentAbilities?: string
  sidebar?: [ReactNode] | ReactNode
}

const Page: FunctionComponent<Props> = ({
  className, children,
  background, color,
  style,
  title, abilities, contentTitle, contentAbilities, sidebar
}) =>

  <div
    className={concat('page', className)}
    style={{
      ...styles.container,
      ...(background ? { background: background } : null),
      ...(color ? { color: color } : null),
      padding: config.size.gutters,
      display: 'flex',
      alignItems: 'stretch',
      height: '100%',
      fontFamily: config.fontFamily,
      fontSize: config.size.pageText,
      lineHeight: config.size.pageLineHeight,
      paddingTop: '5rem',
      paddingBottom: '5rem',
      ...style
    }}>

    { sidebar
      ? <nav
        className='page__nav'
        style={{
          marginRight: config.size.gutters,
          whiteSpace: 'nowrap'
        }}>
        { sidebar }
      </nav>
      : null }

    <main
      className='page__main'
      style={{
        flexGrow: 1,
        maxWidth: config.size.maxWidth,
        margin: '0 auto'
      }}>

      { title
        ? <Row style={{
          marginBottom: config.size.gutters
        }}>
          <h1
            style={{
              flexGrow: 1,
              fontSize: '2rem',
              lineHeight: '1.5rem',
              height: '1.5rem'
            }}>
            {title}
          </h1>
          { abilities }
        </Row> : null }

      <div style={{
        padding: config.size.gutters,
        paddingLeft: '5rem',
        paddingRight: '5rem'
      }}>

        { contentTitle
          ? <Row style={{ marginBottom: config.size.gutters }}>
            <h2
              style={{
                flexGrow: 1,
                fontSize: '1.5rem',
                lineHeight: '1rem',
                height: '1.1rem'
              }}>
              {contentTitle}
            </h2>
            { contentAbilities }
          </Row> : null }

        {children}

      </div>

    </main>

  </div>

export default Page
