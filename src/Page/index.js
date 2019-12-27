import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../_utility/concat.js'

import { Row, Content, Gutter } from '../'

const Page = ({
  className, children,
  background, color, style,

  title, abilities, contentTitle, contentAbilities, sidebar
}) =>

<div
  className={concat('page', className)}
  style={{
    ...styles.container,
    ...(background ? { background: background } : null),
    ...(color ? { color: color } : null),
    padding: '1rem',
    display: 'flex',
    alignItems: 'stretch',
    height: '100%',
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
    ...style
  }}>

  { sidebar
    ? <nav
        style={{
          marginRight:'1rem',
          whiteSpace: 'nowrap'
        }}>
        { sidebar }
      </nav>
    : null }

  <main>

    { title
      ? <Row style={{
        marginBottom: '1rem'
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

    <div style={{padding: '1.5rem'}}>

      { contentTitle
        ? <Row style={{marginBottom: '1rem'}}>
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

Page.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  onClick: PropTypes.func,
  background: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object
}

export default Page
