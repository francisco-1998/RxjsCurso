import { timer, interval } from "rxjs";

const observer = {
    next: valor=>console.log('next:', valor),
    complete:()=>console.log('complete')
}


const hoyEn5 = new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds()+5);

const interval$ = interval(5000);

// console.log('Inicio');
// const subs1  = interval$.subscribe(observer)
// console.log('Fin');


// const timer$ = timer(2000);
// const timer$ = timer(2000, 1000); //Crear un interval despues de 2 segundos
const timer$ = timer(hoyEn5);

console.log('Inicio');
const subs2 = timer$.subscribe(observer)
console.log('Fin');
