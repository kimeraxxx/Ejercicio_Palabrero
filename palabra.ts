export class Palabra {
    private _cadena: string;

    constructor(cadena: string) {
        this._cadena = cadena;
    }


    /**
     * Getter cadena
     * @return {string}
     */
    public get cadena(): string {
        return this._cadena;
    }

    /**
     * Setter cadena
     * @param {string} value
     */
    public set cadena(value: string) {
        this._cadena = value;
    }

    //get como metodo delegado
    public get longitud() {
        console.log("jeje");
        return this.cadena.length;
    }

    /**
     * busca la cadena search en la _cadena
     * @param search the text you are lookin for
     * return el array con las posiciones o vacio si no está
     */
    public findPosiitions(search:string): Array<number> {
        let positions=[];
        let event=this.cadena.indexOf(search);
        while(event!=-1){
            positions.push(event);
            event=this.cadena.indexOf(search,event+1);
        }
        return positions;
    }
    public replacePositions(positions:Array<number>,caracter:string){
       for (let i = 0; i < positions.length; i++) {
           const element = positions[i];
            let partA=this.cadena.slice(0,element);   
            let partB=this.cadena.slice(element+1);
            this.cadena=partA+caracter+partB;  
       }
    }
}