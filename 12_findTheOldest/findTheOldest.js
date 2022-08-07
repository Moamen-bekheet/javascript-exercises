const findTheOldest = function(peopleArr) {
    peopleArr.sort(((personOne,personTwo) => {
        if(!(personOne.yearOfDeath)){
            personOne.yearOfDeath = (new Date).getUTCFullYear();
        }
        if(!(personTwo.yearOfDeath)){
            personTwo.yearOfDeath = (new Date).getUTCFullYear();
        }
        let personOneDeathAge = personOne.yearOfDeath - personOne.yearOfBirth;
        let personTwoDeathAge = personTwo.yearOfDeath - personTwo.yearOfBirth;
        if(personOneDeathAge>personTwoDeathAge){
            return -1;
        }
        else{
            return 1;
        }
    }))
    return peopleArr[0];
}
// Do not edit below this line
module.exports = findTheOldest;
