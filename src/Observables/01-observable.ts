import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
    next: valor => console.log('siguiente [next]', valor),
    error: error => console.log('error [obs]', error),
    complete: () => console.info('completado[obs]')
}

const obs$ = new Observable<string>(subscriber => {
    subscriber.next('Hola')
    subscriber.next('Mundo')
    subscriber.next('Hola')
    subscriber.next('Mundo')

    //Forzar un error
    // const a = undefined;
    // a.nombre = "Fernando";

    subscriber.complete()
    subscriber.next('Haber si es cierto')
});

//Forma 1
obs$.subscribe(resp => {
    return console.log(resp)
});

//Forma 2
obs$.subscribe(
    valor => console.log('next: ', valor),
    error => console.warn('error:', error),
    () => console.log('Completado')
);

//Forma 3
obs$.subscribe(observer);