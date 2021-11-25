import { Palabra } from "./palabra";

export class Enigma {
    public _cadena: Palabra;
    constructor(longitud: number) {
        this._cadena = new Palabra(this.generateCadena(longitud));
    }

    private generateCadena(longitud: number): string {
        let cadena: string = "_";
        return cadena.repeat(longitud);
    }

    public isPalabraAcertada(): boolean {
        // return (this._cadena.cadena.indexOf("_") == -1);
        return this._cadena.cadena.indexOf("_") == -1;
    }
}