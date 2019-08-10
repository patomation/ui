const fs = require('fs');
const path = './src/components';

//Read directory
fs.readdir( path, (err, items) => {

  //Store file content as string
  let content = '';

  //For each file
  items.forEach( item => {
    console.log(item);
    //Ignore index.js
    if( item !== 'index.js' ){
      //Create export string and append it to content string
      content += `export {default as ${item}} from './${item}';\r\n`
    }
  });

  // //Write content to file
  fs.writeFile( `${path}/index.js`, content, result => {
    console.log('Wrote new file', `${path}/index.js`);
  });

});
