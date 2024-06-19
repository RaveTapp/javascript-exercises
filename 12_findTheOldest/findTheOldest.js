const findTheOldest = function(people) {
    let oldest;
    let maxAge = 0;
    
    for(let i = 0; i < people.length; i++){
        let currentAge;
        if(Object.hasOwn(people[i], 'yearOfDeath')){
            currentAge = people[i].yearOfDeath - people[i].yearOfBirth;
        } else {
            const date = new Date();
            currentAge = date.getFullYear() - people[i].yearOfBirth;
        }
        
        if(currentAge > maxAge){
            oldest = people[i];
            maxAge = currentAge;
        }
    }
    
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
