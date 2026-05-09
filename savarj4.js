function xbovani(string) {
    return string.split("").filter(aso => "aeiouჲ".includes(aso)).length;
}


console.log(xbovani("gadaindustrializebultagani"))




function xbovani(string) {
    let count = 0;
    
    for(let i = 0; i < string.split("").length; i++) {
        if (string[i] === "a"|| string[i] ==="e"|| string[i] ==="i"|| string[i] ==="o"|| string[i] === "u")   //mdzimis marto bolos abrunebs. || yvelas abrunebs
        count++;
    }                                                                                              
 return count;                                                                                                   
}


console.log(xbovani("gadaindustrializebultagani"))
