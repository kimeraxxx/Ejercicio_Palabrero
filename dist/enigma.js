"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enigma = void 0;
const palabra_1 = require("./palabra");
class Enigma {
    constructor(longitud) {
        this._cadena = new palabra_1.Palabra(this.generateCadena(longitud));
    }
    generateCadena(longitud) {
        let cadena = "_";
        return cadena.repeat(longitud);
    }
    isPalabraAcertada() {
        // return (this._cadena.cadena.indexOf("_") == -1);
        return this._cadena.cadena.indexOf("_") == -1;
    }
}
exports.Enigma = Enigma;
