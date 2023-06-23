// let p = document.createElement("p")
// p.className = "paragrafo"
// p.id = "hello"
// let hello =  document.createElement("h2")

// hello.innerText = "hello World!"

// p.append(hello)
// document.body.append(p)
// ---------------------------------------------------------------


let nav = document.createElement("p")
nav.className = "paragrafo"
console.log(nav)

let nome = document.createElement("h2")
nome.className = "nome"
nome.innerText = "Felipe"

nav.append(nome)
document.body.append(nav)
console.log(nome)

function eliminar(){
    let sobrenome = document.getElementById("sobrenome")
    sobrenome.remove()

}
