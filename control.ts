import { Palabra } from './palabra';
import { Palabrero } from './palabrero';
import { Enigma } from './enigma';
export class Control {
  
    public palabreja: Palabra;
    // TODO: private palabreja: Palabra;
    private fallos = 0;
    private MAX_FALLOS=5;
    private enigma:Enigma;
    
    constructor() {
        this.palabreja = Palabrero.getPalabraAleatorio();
        this.enigma=new Enigma(this.palabreja.longitud);
    }

    public pedirLetra(letra:string){
        let posiciones=this.palabreja.findPosiitions(letra);    
        if(!this.isVacio(posiciones)){
            this.enigma._cadena.replacePositions(posiciones,letra);
        }    
        else {
            this.fallos++;
        }
    }
    public isMaximoFallos(){
        return this.fallos>=this.MAX_FALLOS
    }

    public isAcertadaPalabra(){
        return this.enigma.isPalabraAcertada();
    }
    public isVacio(posiciones:Array<number>){
    // TODO: private isVacio(posiciones:Array<number>){
        return posiciones.length==0;
    }
    public mostrarParcial():string {
        return this.enigma._cadena.cadena;
     }
}