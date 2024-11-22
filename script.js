function setRounds(){
    let rounds = prompt("How many rounds?");
    if (rounds % 2 === 0) {
        alert("must be odd");
        return setRounds();
    }
    else return rounds;
    //working//
}
