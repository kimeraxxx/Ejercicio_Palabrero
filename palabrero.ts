import { Palabra } from './palabra';
export class Palabrero{
    private static vectorPalabras:string[]=["pepe","agua","barbacoa"];

    public static getPalabraAleatorio():Palabra{
        let valor=Math.floor( Math.random()*3);
        return new Palabra(this.vectorPalabras[valor]);
    }
}