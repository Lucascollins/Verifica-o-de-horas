var n = document.querySelector("input#ne")
var res = document.querySelector("div.res")
var botam = document.querySelector("Input.buttom")

botam.addEventListener("click", write)

function write() {

    var nacio = n.value
    var nar = nacio.toUpperCase()
    res.innerHTML = ``
    if (nar == "BRASIL") {
        res.innerHTML += `<h4>Aprovado<h4>`
        res.innerHTML += `<p>Your are a <strong>Brazuca</strong></p>`
        res.style.color = "rgba(0, 255, 0, 1)"

    } else {
        res.innerHTML += `<h4>Reprovado<h4>`
        res.innerHTML += `<p>Your are a <strong>Gringo<strong></p>`
        res.style.color = "red"
    }
}