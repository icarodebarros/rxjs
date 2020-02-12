import { PrintIntem } from '../../util/printItem';
import { of, Subject, interval } from 'rxjs';
import { scan, map, distinctUntilChanged, delay, mergeMap } from 'rxjs/operators';

/*
    scan
    
    Reduce over time
    OBS.: scan<number, number>(accumulator: (acc: number, value: number, index: number) => number, seed: number)
    A saída do REDUCE é apenas de 1 elemento!
    A saída do SCAN é igual ao número de emissões da fonte de entrada!

    💡 You can create Redux-like state management with scan!

*/

const source = of(1, 2, 3, 4);
// basic scan example, sum over time starting with zero
const example = source.pipe(scan((acc, curr) => acc + curr, 0));
// log accumulated values
// output: 1,3,6,10
const subscribe = example.subscribe(PrintIntem.print);

// --------------------------------------------------------------------------------------

// const subject = new Subject();
// //scan example building an object over time
// const example = subject.pipe(
//   scan((acc, curr) => Object.assign({}, acc, curr), {})
// );
// //log accumulated values
// const subscribe = example.subscribe((val: any) =>
//   PrintIntem.print(`Accumulated object: {name: ${val.name}${val.age ?  ', age: ' + val.age : ''}${val.favoriteLanguage ?  ', favoriteLanguage: ' + val.favoriteLanguage : ''} }`)
// );
// //next values into subject, adding properties to object
// // {name: 'Joe'}
// subject.next({ name: 'Joe' });
// // {name: 'Joe', age: 30}
// subject.next({ age: 30 });
// // {name: 'Joe', age: 30, favoriteLanguage: 'JavaScript'}
// subject.next({ favoriteLanguage: 'JavaScript' });

// --------------------------------------------------------------------------------------

// // Accumulate values in an array, emit random values from this array.
// const scanObs = interval(1000)
//   .pipe(
//     scan((a, c) => [...a, c], []),
//     // map(r => r[Math.floor(Math.random() * r.length)]),
//     // distinctUntilChanged()
//   )
//   .subscribe(PrintIntem.print);

// --------------------------------------------------------------------------------------

//   const fakeRequest = of('response').pipe(delay(2000));

// // output:
// // ['response'],
// // ['response','response'],
// // ['response','response','response'],
// // etc...

// interval(1000)
//   .pipe(
//     mergeMap(_ => fakeRequest),
//     scan((all, current) => [...all, current], [])
//   )
//   .subscribe(PrintIntem.print);