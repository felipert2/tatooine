let tarefas = [];

let botaoEnviar = document.getElementById("enviar2")
botaoEnviar.addEventListener("click", acaoEnviar)

let entrada = document.getElementById("entrada")

function acaoEnviar() {
    let entrada = document.getElementById("entrada")
    tarefas.push(entrada.value)
    entrada.value = ""
}


function visualizar(){
    console.log(tarefas)
    let resultado = document.getElementById("resultado")
}

let botaoLimpar = document.getElementById("limpar")
botaoLimpar.addEventListener("click", acaoLimpar)

function acaoLimpar(){
    tarefas = [];
    console.log(tarefas);
}
