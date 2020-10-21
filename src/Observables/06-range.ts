import { of, range , asyncScheduler} from "rxjs";

 /**
  * asyncScheduler = convierte un observable syncrono en asyncrono
  * range = emite valores especificando un rango, puede ser asyncrono o syncrono(defecto)
  */
// const obs$ = of(1, 2, 3, 4, 5);
const obs$ = range(1,5,asyncScheduler);

console.log('Inicio');
obs$.subscribe(console.log)
console.log('Fin');