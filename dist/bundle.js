(()=>{"use strict";var a={79:(a,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Control=void 0;const r=t(432),i=t(781);e.Control=class{constructor(){this.fallos=0,this.MAX_FALLOS=5,this.palabreja=r.Palabrero.getPalabraAleatorio(),this.enigma=new i.Enigma(this.palabreja.longitud)}pedirLetra(a){let e=this.palabreja.findPosiitions(a);this.isVacio(e)?this.fallos++:this.enigma._cadena.replacePositions(e,a)}isMaximoFallos(){return this.fallos>=this.MAX_FALLOS}isAcertadaPalabra(){return this.enigma.isPalabraAcertada()}isVacio(a){return 0==a.length}mostrarParcial(){return this.enigma._cadena.cadena}}},781:(a,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Enigma=void 0;const r=t(270);e.Enigma=class{constructor(a){this._cadena=new r.Palabra(this.generateCadena(a))}generateCadena(a){return"_".repeat(a)}isPalabraAcertada(){return-1==this._cadena.cadena.indexOf("_")}}},270:(a,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Palabra=void 0,e.Palabra=class{constructor(a){this._cadena=a}get cadena(){return this._cadena}set cadena(a){this._cadena=a}get longitud(){return this.cadena.length}findPosiitions(a){return this.cadena.indexOf(a),[]}replacePositions(a,e){for(let t=0;t<a.length;t++){const r=a[t];let i=this.cadena.slice(0,r),n=this.cadena.slice(r+1);this.cadena=i+e+n}}}},432:(a,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Palabrero=void 0;const r=t(270);class i{static getPalabraAleatorio(){let a=Math.floor(3*Math.random());return new r.Palabra(this.vectorPalabras[a])}}e.Palabrero=i,i.vectorPalabras=["pepe","agua","barbacoa"]}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var n=e[r]={exports:{}};return a[r](n,n.exports,t),n.exports}(()=>{const a=t(79);!function(){let e=new a.Control;alert("bienvenido al juego del ahorcado"),alert("la palabra tiene "+e.palabreja.longitud+" letras");do{e.pedirLetra(prompt("introduzca una letra")),alert(e.mostrarParcial())}while(!e.isMaximoFallos()&&!e.isAcertadaPalabra());e.isMaximoFallos()?alert("lo siento otra vez sera"):alert("Enhorabuena, has ganado")}()})()})();