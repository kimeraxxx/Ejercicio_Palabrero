"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Palabrero = void 0;
const palabra_1 = require("./palabra");
class Palabrero {
    static getPalabraAleatorio() {
        let valor = Math.floor(Math.random() * 3);
        return new palabra_1.Palabra(this.vectorPalabras[valor]);
    }
}
exports.Palabrero = Palabrero;
Palabrero.vectorPalabras = ["pepe", "agua", "barbacoa"];
