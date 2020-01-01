import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../_utility/concat.js'
import hljs from 'highlight.js'

/**
* A component for displaying code samples
*/
const Code = ({
  className, block,
  children,
  background = '#333', color = '#ffffff', style
}) =>

  <div
    className={concat('code', className)}
    style={{
      ...styles.container,
      ...(background ? { background: background } : null),
      ...(color ? { color: color } : null),
      borderRadius: '0.5rem',
      ...style
    }}>
    <style>{`
    /* a11y-dark theme */
    /* Based on the Tomorrow Night Eighties theme: https://github.com/isagalaev/highlight.js/blob/master/src/styles/tomorrow-night-eighties.css */
    /* @author: ericwbailey */

    /* Comment */
    .hljs-comment,
    .hljs-quote {
      color: #d4d0ab;
    }

    /* Red */
    .hljs-variable,
    .hljs-template-variable,
    .hljs-tag,
    .hljs-name,
    .hljs-selector-id,
    .hljs-selector-class,
    .hljs-regexp,
    .hljs-deletion {
      color: #ffa07a;
    }

    /* Orange */
    .hljs-number,
    .hljs-built_in,
    .hljs-builtin-name,
    .hljs-literal,
    .hljs-type,
    .hljs-params,
    .hljs-meta,
    .hljs-link {
      color: #f5ab35;
    }

    /* Yellow */
    .hljs-attribute {
      color: #ffd700;
    }

    /* Green */
    .hljs-string,
    .hljs-symbol,
    .hljs-bullet,
    .hljs-addition {
      color: #abe338;
    }

    /* Blue */
    .hljs-title,
    .hljs-section {
      color: #00e0e0;
    }

    /* Purple */
    .hljs-keyword,
    .hljs-selector-tag {
      color: #dcc6e0;
    }

    .hljs {
      display: block;
      overflow-x: auto;
      /* background: #2b2b2b; */
      color: #f8f8f2;
      padding: 0.5em;
    }

    .hljs-emphasis {
      font-style: italic;
    }

    .hljs-strong {
      font-weight: bold;
    }

    @media screen and (-ms-high-contrast: active) {
      .hljs-addition,
      .hljs-attribute,
      .hljs-built_in,
      .hljs-builtin-name,
      .hljs-bullet,
      .hljs-comment,
      .hljs-link,
      .hljs-literal,
      .hljs-meta,
      .hljs-number,
      .hljs-params,
      .hljs-string,
      .hljs-symbol,
      .hljs-type,
      .hljs-quote {
            color: highlight;
        }

        .hljs-keyword,
        .hljs-selector-tag {
            font-weight: bold;
        }
    }


    `}</style>
    <pre>
      <code className='hljs'>

        { children || block
          ? <div dangerouslySetInnerHTML={{ __html: hljs.highlightAuto(children || block).value }} />
          : null }

      </code>
    </pre>
  </div>

Code.propTypes = {
  /**
  * Exposes ability to set a custom class name
  **/
  className: PropTypes.string,
  /**
  * Individual component or set of components accepted as children
  **/
  children: PropTypes.string,
  block: PropTypes.string,
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

export default Code
