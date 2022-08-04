const removeFromArray = function(Arr, ...args) {
    for(let i of args){
        for(let j=0;j<=Arr.length;j++){
            if(Arr[j]===i){
                Arr.splice(j,1);
            }
        }
    }
    return Arr;
};

// Do not edit below this line
module.exports = removeFromArray;
