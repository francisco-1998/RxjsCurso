import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
    next: valor => console.log('next: ', valor),
    error: error => console.log('error: ', error),
    complete: () => console.info('completado')
}

const intervalo$ = new Observable<number>(subscriber => {

    let count = 0;

    const intervalo = setInterval(() => {
        count++;
        subscriber.next(count)
        console.log(count);
    }, 1000)

    setTimeout(() => {
        subscriber.complete();
    }, 2500);

    return () => {
        clearInterval(intervalo)
        console.log('Intervalo destruido');
    }
});

const subscription1 = intervalo$.subscribe(observer)
const subscription2 = intervalo$.subscribe(observer)
const subscription3 = intervalo$.subscribe(observer)


subscription1.add(subscription2)
             .add(subscription3);

setTimeout(() => {
    subscription1.unsubscribe();
    // subscription2.unsubscribe();
    // subscription3.unsubscribe();
    console.log('Se cancelo la subscripcion mediante el timeout');
}, 6000);