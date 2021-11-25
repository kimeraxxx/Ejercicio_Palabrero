"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.play = void 0;
const control_1 = require("./control");
function play() {
    let control = new control_1.Control();
    alert("bienvenido al juego del ahorcado");
    alert("la palabra tiene " + control.palabreja.longitud + " letras");
    do {
        control.pedirLetra(prompt("introduzca una letra"));
        alert(control.mostrarParcial());
    } while (!control.isMaximoFallos() && !control.isAcertadaPalabra());
    if (control.isMaximoFallos()) {
        alert("lo siento otra vez sera");
    }
    else {
        alert("Enhorabuena, has ganado bieeen");
    }
}
exports.play = play;
play();
