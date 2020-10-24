import { range, fromEvent } from 'rxjs';
import { map, mapTo, pluck } from "rxjs/operators";



//pipe() = Método de los observables


// range(1, 5).pipe(
//     map<number, number>(val => {
//         return val * 10;
//     })
// ).subscribe(console.log);

// range(1, 5).pipe(
//     map<number, string>(val => {
//         return (val * 10).toString();
//     })
// ).subscribe(console.log);


const keyUp$ = fromEvent<KeyboardEvent >(document, 'keyup');

const keyupCode$= keyUp$.pipe(
    map(data=>{
        return data.code;
    })
)

// const keyupPluck$ = keyUp$.pipe(
//     pluck('key')
// );

const keyupPluck$ = keyUp$.pipe(
    pluck('target', 'baseURI')
);

const keyupMapTo$ = keyUp$.pipe(
    mapTo('tecla presionada')
);

keyupCode$.subscribe(val=>{ console.log('map',val); })
keyupPluck$.subscribe(val=>{ console.log('pluck',val); })
keyupMapTo$.subscribe(val=>{ console.log('mapTo',val); })