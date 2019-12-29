import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'

const Table = ({
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

Table.propTypes = {
  className: PropTypes.string,
  background: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
  header: PropTypes.object,
  data: PropTypes.object,
  footer: PropTypes.object
}

export default Table
