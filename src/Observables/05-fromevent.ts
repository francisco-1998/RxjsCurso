import { fromEvent } from "rxjs";
import { createLogicalAnd } from "typescript";

/**
 * Evento del DOM
 */
 const src1$ = fromEvent<MouseEvent>(document, 'click')
 const src2$ = fromEvent<KeyboardEvent>(document, 'keyup')


 const observer = {
     next: val =>console.log('next', val)
 }

 //Demostracion de lo que hace el from event
 src1$.subscribe(observer);

 //Forma para obtener valores del objeto que devuelve el from event
 src1$.subscribe(evt=>{
     console.log('Coordenada X: ',evt.x);
     console.log('Coordenada Y: ',evt.y);
 });

 //Otra forma de hacerlo aplicando ES6

 src1$.subscribe(({x,y})=>{
    console.log('Forma 2 con ES6');
    console.log('Coordenada X: ',x);
    console.log('Coordenada Y: ',y);
 })


 src2$.subscribe(observer);
 src2$.subscribe(evento=>{
     console.log('Tecla presionda: ',evento.key);
 });
