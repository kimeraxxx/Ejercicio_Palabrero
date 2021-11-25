"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Palabra = void 0;
class Palabra {
    constructor(cadena) {
        this._cadena = cadena;
    }
    /**
     * Getter cadena
     * @return {string}
     */
    get cadena() {
        return this._cadena;
    }
    /**
     * Setter cadena
     * @param {string} value
     */
    set cadena(value) {
        this._cadena = value;
    }
    //get como metodo delegado
    get longitud() {
        console.log("jeje");
        return this.cadena.length;
    }
    /**
     * busca la cadena search en la _cadena
     * @param search the text you are lookin for
     * return el array con las posiciones o vacio si no está
     */
    findPosiitions(search) {
        let positions = [];
        let event = this.cadena.indexOf(search);
        while (event != -1) {
            positions.push(event);
            event = this.cadena.indexOf(search, event + 1);
        }
        return positions;
    }
    replacePositions(positions, caracter) {
        for (let i = 0; i < positions.length; i++) {
            const element = positions[i];
            let partA = this.cadena.slice(0, element);
            let partB = this.cadena.slice(element + 1);
            this.cadena = partA + caracter + partB;
        }
    }
}
exports.Palabra = Palabra;
