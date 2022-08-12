const {getLetters, getPosition} =  require('./data/getInfo');

const newPosition = Object.entries(getPosition);
const newLetters = Object.entries(getLetters);

//getUrl toma un array con caracteres y un array con posiciones,
//evalua si el valor del primer array coincide con la clave del segundo array
//retorna un nuevo array donde cada elemento contiene un objeto con un caracter y sus posiciones
const getUrl = (arrayLetter, arrayPositions) =>{
    let newArray = []
    newArray = arrayLetter.map(char=>{
        const positionLetter = arrayPositions.find(position=>char[1]===position[0])
    
                    return {
                        char: char[0],
                        position: positionLetter[1]
                    }
    })
    return newArray
};

//orderUrl toma un array donde la clave position contiene un array con las posiciones del caracter
//retorna un nuevo array que permite individualizar los caracteres con una posición unica
//y los ordena segun el valor de position
const orderUrl = (array) =>{
    
    let tempLetter = []

    array.forEach(objLetter=>{
        objLetter.position.forEach(position => {
            tempLetter.push({
                char: objLetter.char,
                position
            })
        })
    })
    
    return tempLetter.sort((a, b) => {
        if (a.position > b.position) {
          return 1;
        }
        if (a.position < b.position) {
            return -1;
        }
        return 0;
    });
};

//Toma un array de objetos, extrae el valor de la clave 'char'
//retorna un nuevo array con solo caracteres ordenados y se pasa a string
const link = (linkArray) =>{
    const newLink = []
    linkArray.forEach(letter=>{
        let charArray = Object.values(letter.char).toString()
        
        newLink.push(charArray)
    })

    return newLink.join('')
};

const url = link(orderUrl(getUrl(newLetters, newPosition)));

module.exports = {
    getUrl,
    orderUrl,
    link
}