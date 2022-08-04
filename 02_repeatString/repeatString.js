const repeatString = function(string, num) {
    let stringArr = [];
    for(let i=1;i<=num;i++){
        stringArr.push(string);
    }
    return stringArr.join('');
};

// Do not edit below this line
module.exports = repeatString;
