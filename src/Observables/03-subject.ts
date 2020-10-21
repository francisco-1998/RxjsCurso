import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
    next: valor => console.log('next: ', valor),
    error: error => console.log('error: ', error),
    complete: () => console.info('completado')
}

const intervalo$ = new Observable(subscriber => {

    const intervalo = setInterval(() => {
        subscriber.next(Math.random())
    }, 1000)


    return () =>{
        clearInterval(intervalo);
        console.log('Intervalo cerrado');
    }
})

/*
1.- Tipo especial de observable, permite casteo multiple de la informacion en las subscripciones

2.-Tambien es un observer

3.-Tambien se puede manejar el next() , error(), complete()
*/

const subject$ = new Subject();
const subjectSuscription = intervalo$.subscribe(subject$);

// const subscription1 = intervalo$.subscribe(numero => {
//     console.log('Numero1: ', numero);
// })
// const subscription2 = intervalo$.subscribe(numero => {
//     console.log('Numero2: ', numero);
// })

// const subscription1 = subject$.subscribe(numero => { console.log('Numero1: ', numero); })
// const subscription2 = subject$.subscribe(numero => { console.log('Numero2: ', numero); })

const subscription1 = subject$.subscribe(observer)
const subscription2 = subject$.subscribe(observer)


setTimeout(() => {
    
    subject$.next(10);
    subject$.complete();
    subjectSuscription.unsubscribe();

}, 3500);



/**
 * Apuntes de la clase
 * Cuando la data es producida por el observable en si mismo, es considerado un "Cold Observable". Pero cuando la data es producida FUERA del observable es llamado "Hot Observable"
 * 
 * 
 * 
 * Dato importante, el Subject Observable hace aquello
 */