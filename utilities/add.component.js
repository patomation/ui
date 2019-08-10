const fs = require('fs');
const mkdirp = require('mkdirp');
const getDirName = require('path').dirname;

const path = './src/components';
const args = process.argv.slice(2);

let componentName = args[0],
      optionFlag = args[1]

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const  writeFile = (path, content, callback) => {
  mkdirp(getDirName(path), function (err) {
    if (err) return callback(err);

    fs.writeFile(path, content, callback);
  });
}

const index = (element) =>
`import React from 'react';
import styles from './styles.js'

export default (props) => {

  const { className, children, onClick, background, color, style } = props;

  return(
    <${element}
      onClick={onClick}
      className={className}
      style={{
        ...style.container,
        ...( background ? { background: background } : null ),
        ...( color ? { color: color } : null ),
        ...style
      }}>

      {children}

    </${element}>
  )
}`


const styles = () =>
`export default {
  container:{

  },
}`


const main = () => {
  let elementName = null;
  if (optionFlag === '-e') {
    console.log('make element mode');
    //use lower case as element name
    elementName = componentName.toLowerCase();
    //Capitalize first letter
    componentName = capitalizeFirstLetter(componentName)
  } else {
    console.log('make div component');
    //Use div as element
    elementName = 'div';
    //component name should be cammel case
  }

  const folderPath = `${path}/${componentName}/`
  //Make index.js
  writeFile(`${folderPath}/index.js`,index(elementName), ()=>{
    console.log(`Wrote index file in: ${folderPath}`);
  })

  //Make style.js
  writeFile(`${folderPath}/styles.js`,styles(), ()=>{
    console.log(`Wrote styles file in: ${folderPath}`);
  })
}

main();





















//
