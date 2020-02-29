
export default {
  container: {
    // display: '-ms-grid', // eslint-disable-line
    display: 'grid', // eslint-disable-line
    // gridGap: '0',
    // gridTemplateColumns: repeat(columns, `${width}%` ),
    // justifyItems: 'center',
    // alignItems: 'center'
    justifyItems: 'stretch'
  },
  item: {
    gridColumn: 'auto / span auto',
    gridRow: '0 / span 0'
  }
}
