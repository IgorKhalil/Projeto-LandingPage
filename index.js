var SetaDireita = window.document.getElementById("setadireita")
var SetaEsquerda = window.document.getElementById("setaesquerda")
var Bruna = window.document.getElementById("bruna")
var Leonardo = window.document.getElementById("leonardo")
var Samantha = window.document.getElementById("samantha")

 
function RolarParaDireita() {
    Bruna.style = "display:none"
    Samantha.style = "display: flex" 
    SetaDireita.style ="display: none"
    SetaEsquerda.style = "display: flex; margin-rigth: 0px"
}
function RolarParaEsquerda() {
    Bruna.style = "display: flex"
    Samantha.style = "display: none"
    SetaDireita.style = "display: flex"
    SetaEsquerda.style = "display: none"
}
