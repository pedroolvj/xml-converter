/*  

------*READ ME*------ 

--- HOW TO USE THIS SERVICE:

→ convert the XML file on the site above and save at 'source/$name_of_your_file'
↳ https://www.convertjson.com/xml-to-json.htm

→ change the value of the variable $rawData for the path of your converted file
→ adapt the code to edit what you need in the document
→ change the variable $exportData to edit the name of the edited document
→ run 'npm start' to create the edited JSON file on the folder 'export'

→ convert the JSON file on the site above to get your edited document
↳ https://www.convertjson.com/json-to-xml.htm

*/

const fs = require('fs')

let rawData = fs.readFileSync('source/convertjson.json');
let jsonData = JSON.parse(rawData);

let exportData = 'json-to-xml'

let value = jsonData.NFe.infNFe.det;
let ind = 1

Object.values(value).forEach(element => {
    element._nItem= `${ind}`
    ind++
})


fs.writeFile(`export/${exportData}`, JSON.stringify(jsonData), function(err) {
    if (err) throw err;
    console.log('Saved!');
})
