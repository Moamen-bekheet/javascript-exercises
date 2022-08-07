const palindromes = function (text) {
    // this part is used to get valid characters out of argument provided by the function client
    let lowerCaseText = text.toLowerCase();
    const prohibittedCharacters = `.,!?:;_-()[]/'" `
    let characterArr = [];
    for(let i=0;i<lowerCaseText.length;i++){
        if (!(prohibittedCharacters.includes(lowerCaseText[i]))){
           characterArr.push(lowerCaseText[i]);
        }
    }
    // this part is used to get valid characters out of argument provided by the function client
    if(characterArr.length%2===0){
        let middle = characterArr.length/2;
        for(let i=0; i<middle; i++){
            if (!(characterArr[i]===characterArr[characterArr.length-(i+1)])){
                return false;
            }
        }
        return true;
    }
    else{
        let middle = Math.ceil(characterArr.length/2);
        for(let i=0; i<middle; i++){
            if (!(characterArr[i]===characterArr[characterArr.length-(i+1)])){
                return false;
            }
        }
        return true; 
    }
};

// Do not edit below this line
module.exports = palindromes;
