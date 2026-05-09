function coola(x) {
    if (x >= 91 && x <= 100)
        return "A";
    else if (x >= 81 && x <= 90)
        return "B";
    else if (x >= 71 && x <= 80)
        return "C";
    else if (x >= 61 && x <= 70)
        return "D";
    else if (x >= 51 && x <= 60)
        return "E";
        else {return "F"; }
}

console.log(coola(2))