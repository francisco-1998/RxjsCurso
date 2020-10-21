import { of, from } from "rxjs";

/**
 * of = crea un observable que sirve para tomar argumentos y generar una secuencia de valores
 * from = crea un observable en base a un arreglo, a un objeto que tenga estructura de arregla, promesas, iterable, observable
 */


 const observer = {
     next: valor =>console.log('next: ',valor),
     complete: ()=>console.log('complete')
 }

 //Un iterable es un objeto que permite a mi obtener los valores secuenciales del mismo

 const miGenerador = function *() {
     yield 1;
     yield 2;
     yield 3;
     yield 4;
     yield 5;
 }

 const miIterable = miGenerador();

from(miIterable).subscribe(observer)

//  const source$ = from([1, 2, 3, 4, 5]);
//  const source$ = of([1, 2, 3, 4, 5]);
//  const source$ = of(...[1, 2, 3, 4, 5]);
//  const source$ = from('Fernando');

const source$ = from ( fetch('https://api.github.com/users/klerith'))
// source$.subscribe(async(resp)=>{
//     console.log(resp);
//     const data = await resp.json()
//     console.log(data);
// })

// source$.subscribe(observer)
