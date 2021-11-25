import { Enigma } from '../enigma';
import { Control } from '../control';
export function play(){
    let control=new Control();
    alert("bienvenido al juego del ahorcado");
    alert("la palabra tiene "+control.palabreja.longitud+" letras");
    do{
        control.pedirLetra(<string>prompt("introduzca una letra"));
        alert(control.mostrarParcial());
    }while(!control.isMaximoFallos()&&!control.isAcertadaPalabra());
    if(control.isMaximoFallos()){
        alert("lo siento otra vez sera")
    }else{
        alert("Enhorabuena, has ganado");
    }
}
play();