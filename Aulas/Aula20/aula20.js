
// let cafe1 = document.getElementById("cafe1");
// console.log(cafe1);


// let cafe2 = document.getElementsByClassName("cafe2");
// console.log(cafe2)
// console.log(cafe2[1])
// console.log(cafe2[0])
// console.log(cafe2[2])

// let cafe3 = document.getElementsByClassName("cafe3");
// console.log(cafe3);
// console.log(cafe3[0]);

// let genero = document.querySelector("input[name=genero]:checked")
// console.log(genero.value)

// let acucar1 = document.getElementById("acucar")
// console.log(acucar1)
// acucar1.innerText = "Com Açucar"


// let container = document.getElementById("container");
// container.innerHTML = "<p>Paragráfo</p> <h2> Olá </h2>"


// let botao1 = document.getElementById("botao1")
//  botao1.addEventListener("click", acaoClique)

//  function acaoClique(){
//     console.log("Clicou no botão 1")
//  }

//  let botao2 = document.getElementById("botao2")
//  botao2.onclick = () => {   
//  console.log("Clicou no botao 2")
// }

// function acaoCliqueBotao3(){
//     console.log("clicou no botão 3")
// }

// function acaoCliqueBotaoEnviar(){
//     alert("Enviado")
// }

let tarefas = [];

let botaoEnviar = document.getElementById("enviar2")
botaoEnviar.addEventListener("click", acaoEnviar)

let entrada = document.getElementById("entrada");

function acaoEnviar() {
    tarefas.push(entrada.value)
    entrada.value = ""
}


function visualizar(){
    console.log(tarefas)
}

let botaoLimpar = document.getElementById("limpar")
botaoLimpar.addEventListener("click", acaoLimpar)

function acaoLimpar(){
    tarefas = [];
    console.log(tarefas);
}


