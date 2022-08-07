const getTheTitles = function(booksArr) {
    let titlesArr = []
    for(let i=0; i<booksArr.length;i++){
        titlesArr.push(booksArr[i].title);
    }
    return titlesArr;
};

// Do not edit below this line
module.exports = getTheTitles;
