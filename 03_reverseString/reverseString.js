const reverseString = function(string) {
    let stringArr = [...string];
    let reversedStringArr = [];
    for (let i=0; i<string.length;i++){
        reversedStringArr.push(stringArr.pop());
    }
    return reversedStringArr.join('');
};
// Do not edit below this line
module.exports = reverseString;
