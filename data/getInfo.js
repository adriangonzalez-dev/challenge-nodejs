const fs = require('fs');
const path = require('path');

let readInfo =(rutaJson)=>{
    return JSON.parse(fs.readFileSync(path.join(__dirname, rutaJson),"utf-8"))
}

module.exports = {
    getLetters: readInfo("/dataLetters.json"),
    getPosition: readInfo("/dataPosition.json")
};