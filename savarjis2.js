function broony(string) {
    return string.split("").reverse().join("");         //reverse() is an array method, not a string method. Strings don't have .reverse().
}

console.log(broony("tenet"))