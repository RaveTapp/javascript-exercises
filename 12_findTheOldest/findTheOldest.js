const findTheOldest = function(people) {
    return people.map(current =>{
        if(Object.hasOwn(current, 'yearOfDeath')){
            currentAge = current.yearOfDeath - current.yearOfBirth;
        } else {
            const date = new Date();
            currentAge = date.getFullYear() - current.yearOfBirth;
        }
        return {name: current.name, age: currentAge};
    })
        .reduce((oldest, current) => current.age > oldest.age ? current : oldest);
};

// Do not edit below this line
module.exports = findTheOldest;
