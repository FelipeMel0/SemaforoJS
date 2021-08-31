"use strict"

const semaforo = document.getElementById("semaforo")

let idInterval

//Funções

const ligarVerde = () => semaforo.src = "img/verde.png"

const ligarAmarelo = () => semaforo.src = "img/amarelo.png"

const ligarVermelho = () => semaforo.src = "img/vermelho.png"

const desligarSemaforo = () => semaforo.src = "img/desligado.png"


const semaforoVerde = () => semaforo.src.includes("verde")

const semaforoAmarelo = () => semaforo.src.includes("amarelo")

const semaforoVermelho = () => semaforo.src.includes("vermelho")

const automatico = () => {

    if (semaforoVerde()) {
        ligarAmarelo()
    }
    else if (semaforoAmarelo()) {
        ligarVermelho()
    }
    else {
        ligarVerde()
    }

}

const funcionar = () => {

    const buttonAutomatico = document.getElementById("automatico")

    if (buttonAutomatico.textContent == "Automático") {
        buttonAutomatico.textContent = "Parar"
        idInterval = setInterval(automatico, 1000)
    }
    else {
        clearInterval(idInterval)
        buttonAutomatico.textContent = "Automático"
    }
}

//Eventos

document.getElementById("verde").addEventListener("click", ligarVerde)
document.getElementById("amarelo").addEventListener("click", ligarAmarelo)
document.getElementById("vermelho").addEventListener("click", ligarVermelho)
document.getElementById("semaforo").addEventListener("dblclick", desligarSemaforo)
// document.getElementById("automatico").addEventListener("click", automatico)
document.getElementById("automatico").addEventListener("click", funcionar)