
export default {
  container: {
    display: 'grid',
    // gridGap: '0',
    // gridTemplateColumns: repeat(columns, `${width}%` ),
    justifyItems: 'stretch',
    alignItems: 'center'
  },
  item: {
    gridColumn: 'auto / span auto',
    gridRow: '0 / span 0'
  }
}
