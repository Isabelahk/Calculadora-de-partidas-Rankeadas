let findLevel = winningBalance(16, 6)
let level = ""

function winningBalance(numberOfVictories, numberOfDefeats) {
    let victories = numberOfVictories - numberOfDefeats
    return victories 
}

if(findLevel <= 10){
    level = "Ferro"
}else if(findLevel >= 11 && findLevel <= 20){
    level = "Bronze"
}else if(findLevel >= 21 && findLevel <= 50){
    level = "Prata"
}else if(findLevel >= 51 && findLevel <= 80){
    level = "Ouro"
}else if(findLevel >= 81 && findLevel <= 90){
    level = "Diamante"
}else if(findLevel >= 91 && findLevel <= 100){
    level = "Lendário"
}else if(findLevel >= 101){
    level = "Imortal"
}else{
    console.log("Seu nível não foi identificado.")
}

console.log("O Herói tem o saldo de " + findLevel + " e está no nível " + level )