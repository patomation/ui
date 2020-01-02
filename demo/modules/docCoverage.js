const docCoverage = (reacDocGen) => {
  let documented = 0
  let undocumented = 0
  Object.entries(reacDocGen).forEach( ([key, item]) => {
    // console.log(key);
    // console.log(!item.description);
    //Count component descriptions
    if(!item.description){
      undocumented += 1
    } else {
      documented += 1
    }
    //Count props
    if(item.props) {
      Object.entries(item.props).forEach( ([name, prop]) => {
        // console.log(prop.description);
        if(!prop.description){
          undocumented += 1
        } else {
          documented += 1
        }
      })
    }
  })

  const total = undocumented + documented

  return {
    documented,
    undocumented,
    total,
    coverage: `${Math.round( ( documented / total ) *100)}%`
  }
}
export default docCoverage
