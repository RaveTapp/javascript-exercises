const palindromes = function (string) {
    let formatted = string.replace(/[^\w]/g, "");
    formatted = formatted.toLowerCase();

    while(formatted.length > 1){
        if(formatted[0] != formatted.slice(-1)) return false;
        formatted = formatted.substring(1, formatted.length-1);
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
