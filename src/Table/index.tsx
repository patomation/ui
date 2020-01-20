import * as React from 'react'
import * as PropTypes from 'prop-types'
import { FunctionComponent, ReactNode } from 'react'
import styles from './styles'

interface Props {
  children?: [ReactNode] | ReactNode
  className?: string
  background?: string
  color?: string
  style?: object
  header?: any[]
  data?: any[]
  footer?: any[]
}

const Table: FunctionComponent<Props> = ({
  className,
  header, data, footer,
  background, color, style
}) =>
  <table
    className={className}
    style={{
      ...styles.container,
      ...(background ? { background: background } : null),
      ...(color ? { color: color } : null),
      width: '100%',
      borderCollapse: 'collapse',
      ...style
    }}>

    <style>{`
    tr:nth-of-type(odd) {
      background: #eee;
    }
    thead {
      background: #333;
      color: white;
      font-weight: bold;
    }
    td, th {
      padding: 6px;
      border: 1px solid #ccc;
      text-align: left;
    }
  `}</style>

    { header
      ? <thead>
        <tr style={{ background: '#333' }}>
          { header.map((item, index) =>
            <td key={`thead-td-${index}`}> { item } </td>
          )}
        </tr>
      </thead>
      : null }

    { data
      ? <tbody>
        { data.map((row, index) =>
          <tr key={`tbody-tr-${index}`}>
            {row.map((item, index) =>
              <td key={`tbody-td-${index}`}> { item } </td>
            )}
          </tr>
        ) }
      </tbody>
      : null }

    { footer
      ? <tfoot>
        <tr>
          { footer.map((item, index) =>
            <td key={`tfoot-td-${index}`}> { item } </td>
          )}
        </tr>
      </tfoot>
      : null }

  </table>

if (process.env.NODE_ENV !== 'production') {
  Table.propTypes = {
    className: PropTypes.string,
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
    header: PropTypes.array,
    data: PropTypes.array,
    footer: PropTypes.array
  }
}

export default Table
