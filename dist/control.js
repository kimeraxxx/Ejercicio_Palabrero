"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Control = void 0;
const palabrero_1 = require("./palabrero");
const enigma_1 = require("./enigma");
class Control {
    constructor() {
        // TODO: private palabreja: Palabra;
        this.fallos = 0;
        this.MAX_FALLOS = 5;
        this.palabreja = palabrero_1.Palabrero.getPalabraAleatorio();
        this.enigma = new enigma_1.Enigma(this.palabreja.longitud);
    }
    pedirLetra(letra) {
        let posiciones = this.palabreja.findPosiitions(letra);
        if (!this.isVacio(posiciones)) {
            this.enigma._cadena.replacePositions(posiciones, letra);
        }
        else {
            this.fallos++;
        }
    }
    isMaximoFallos() {
        return this.fallos >= this.MAX_FALLOS;
    }
    isAcertadaPalabra() {
        return this.enigma.isPalabraAcertada();
    }
    isVacio(posiciones) {
        // TODO: private isVacio(posiciones:Array<number>){
        return posiciones.length == 0;
    }
    mostrarParcial() {
        return this.enigma._cadena.cadena;
    }
}
exports.Control = Control;
