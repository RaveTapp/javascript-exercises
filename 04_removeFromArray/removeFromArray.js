const removeFromArray = function(array, ...args) {
    let newArray = [];
    
    for(i = 0; i < array.length; i++){
        if(!args.includes(array[i])){
            newArray[newArray.length] = array[i];
        }
    }
    
    return newArray;
};

/*for(x = 0; x < args.length; x++){
            if(args[x] === array[i]){
                toRemove = true;
            }       
        }*/

// Do not edit below this line
module.exports = removeFromArray;
