
function getRounds(){
    let rounds = document.getElementById("rounds").value;
    setRounds(rounds);
}

function setRounds(rounds){
    if (rounds % 2 == 0) {
        alert("must be odd");
    }
    localStorage.setItem("rounds",rounds);
    window.location.replace("chooser.html");
}


function cpuTurn(u){
    let moves = ["r","p","s"];
    let choice = Math.floor(Math.random()*3);
    let c = moves[choice];
    findWinner(u,c);
}

function findWinner(u,c){
    let winner = " ";
    let winArray=[["r","p","I"],["r","s","you"],["p","s","I"],["p","r","you"],["s","r","I"],["s","p","you"]];
        for (let i = 0; i< winArray.length; i++){
            if (winArray[i][0] == u && winArray[i][1]==c){
                winner= winArray[i][2];

            }
        }
    alert("You choose " + u + " and I choose " + c + " " + winner + " win!");
    return winner;
}