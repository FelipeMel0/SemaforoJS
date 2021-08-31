"use strict"

const semaforo = document.getElementById("semaforo")

//Funções

const ligarVerde = () => semaforo.src = "img/verde.png"

const ligarAmarelo = () => semaforo.src = "img/amarelo.png"

const ligarVermelho = () => semaforo.src = "img/vermelho.png"

const desligarSemaforo = () => semaforo.src = "img/desligado.png"

//Eventos

document.getElementById("verde").addEventListener("click", ligarVerde)
document.getElementById("amarelo").addEventListener("click", ligarAmarelo)
document.getElementById("vermelho").addEventListener("click", ligarVermelho)
document.getElementById("semaforo").addEventListener("dblclick", desligarSemaforo)
