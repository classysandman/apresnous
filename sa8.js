function parori(string) {
    let ricxvi = false;
    let didiaso = false;

    for (let i = 0; i < string.length; i++) {
        if (string[i] >= "0" && string[i] <= "9")
            ricxvi = true;
        if (string[i] >= "A" && string[i] <= "Z")
            didiaso = true;
    }

    if (string.length <= 8 && ricxvi === false && didiaso === false)
        return "unda sheicavdes ricxvs, did asos da iyos 8 simboloze meti";
    if (string.length <= 8 && didiaso === false)
        return "unda sheicavdes did asos da iyos 8 simboloze meti";
    if (string.length <= 8 && ricxvi === false)
        return "unda sheicavdes ricxvs da iyos 8 simboloze meti";
    if (string.length <= 8)
        return "unda sheicavdes 8 simboloze mets";
    if (ricxvi === false && didiaso === false)
        return "unda sheicavdes ricxvsa da did asos";
    if (ricxvi === false)
        return "unda sheicavdes ricxvs";
    if (didiaso === false)
        return "unda sheicavdes did asos";

    return string;
}

console.log(parori("Kataxabalaxa"))