

function digitar() {

    let frase = document.getElementById("frase")
    let contagem = frase.value.split(" ")
    console.log(frase.value)
    console.log(contagem)
    console.log(contagem.length)
    let resultado = document.getElementById("resultado")
    resultado.innerText = contagem.length
}


