var numeroSpan = document.getElementById("numero");//pega o span onde está o número
var numeroAtual = 0
var botaoSomar = document.getElementById("somar");
var botaoSubtrair = document.getElementById("subtrair");


function somar(){
    numeroAtual++; 
    numeroSpan.innerHTML = numeroAtual;
}

function subtrair(){
    numeroAtual--;
    numeroSpan.innerHTML = numeroAtual; 
}

botaoSomar.addEventListener("click", somar);
botaoSubtrair.addEventListener("click", subtrair);