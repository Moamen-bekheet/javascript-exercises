const sumAll = function(integerOne,integerTwo) {
    //tried to insert 'instanceof' to make sure integerOne and integerTwo are numbers gave me false, replaced it with typeof
    if((typeof integerOne == 'number')&&(typeof integerTwo == 'number')&&(Math.min(integerOne,integerTwo)>=0)){
        let sum =0;
        if(integerTwo<integerOne){
            for (let i=integerTwo;i<=integerOne;i++){
                sum +=i;
            }
            return sum;
        }
        else{
            for (let i=integerOne;i<=integerTwo;i++){
                sum +=i;
            }
            return sum;
        }
    }
    else{
        return 'ERROR';
    }
};
// Do not edit below this line
module.exports = sumAll;
