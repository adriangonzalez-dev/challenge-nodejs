const {getLetters, getPosition} =  require('./data/getInfo');

const newPosition = Object.entries(getPosition);
const newLetters = Object.entries(getLetters);

let newArray = []

const getUrl = () =>{
    
    newArray = newLetters.map(char=>{
        const positionLetter = newPosition.find(position=>char[1]===position[0])
    
                    return {
                        char: char[0],
                        position: positionLetter[1]
                    }
    })
};

getUrl();

let count = 0 //Contador para saber la cantidad de caracteres

for(let i = 0; i < newArray.length; i++){
        count = count + newArray[i].position.length
        //console.log(newArray[0].position[0])
}

//TOCAR A PARTIR DE ACA!

console.log(count)

let finalArray = newArray.map(objLetter=>{
    for(let i = 0 ; i<=count.length; i++){
        if(objLetter.position.includes(i)){
            return {
                char: objLetter.char,
                position:objLetter.position
            }
        }
    }
})

console.log(finalArray)
//console.log(newArray)


