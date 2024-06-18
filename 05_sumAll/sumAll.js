const sumAll = function(first, second) {
    if(first < 0 || second < 0 || !Number.isInteger(first) || !Number.isInteger(second)){
        return "ERROR";
    }
    if(first > second){
        temp = first;
        first = second;
        second = temp;
    }

    let sum = 0;
    for(i = first; i <= second; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
