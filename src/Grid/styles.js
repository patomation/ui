
export default {
  container: {
    display: '-ms-grid',
    display: 'grid',
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
