import { PrintIntem } from '../../util/printItem';
import { of } from 'rxjs';
import { concatMap, delay, mergeMap } from 'rxjs/operators';

/*
    concatMap
    
    Map values to inner observable, subscribe and emit in order.

*/

//💡 Note the difference between concatMap and mergeMap. Because concatMap does not subscribe to the next
// observable until the previous completes, the value from the source delayed by 2000ms will be emitted first.
// Contrast this with mergeMap which subscribes immediately to inner observables, the observable with the
// lesser delay (1000ms) will emit, followed by the observable which takes 2000ms to complete.

//emit delay value
const source = of(2000, 1000);
// map value from source into inner observable, when complete emit result and move to next
const example = source.pipe(
  concatMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
);
//output: With concatMap: Delayed by: 2000ms, With concatMap: Delayed by: 1000ms
const subscribe = example.subscribe(val =>
  PrintIntem.print(`With concatMap: ${val}`)
);

// showing the difference between concatMap and mergeMap
const mergeMapExample = source
  .pipe(
    // just so we can log this after the first example has run
    delay(5000),
    mergeMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
  )
  //output: With mergeMap: Delayed by: 1000ms, With mergeMap: Delayed by: 2000ms
  .subscribe(val => PrintIntem.print(`With mergeMap: ${val}`));

// --------------------------------------------------------------------------------------

// //emit 'Hello' and 'Goodbye'
// const source = of('Hello', 'Goodbye');
// //example with promise
// const examplePromise = val => new Promise(resolve => resolve(`${val} World!`));
// // map value from source into inner observable, when complete emit result and move to next
// const example = source.pipe(concatMap(val => examplePromise(val)));
// //output: 'Example w/ Promise: 'Hello World', Example w/ Promise: 'Goodbye World'
// const subscribe = example.subscribe(val =>
//   PrintIntem.print('Example w/ Promise:' + val)
// );

// --------------------------------------------------------------------------------------

// //emit 'Hello' and 'Goodbye'
// const source = of('Hello', 'Goodbye');
// //example with promise
// const examplePromise = val => new Promise(resolve => resolve(`${val} World!`));
// //result of first param passed to second param selector function before being  returned
// const example = source.pipe(
//   concatMap(val => examplePromise(val), result => `${result} w/ selector!`)
// );
// //output: 'Example w/ Selector: 'Hello w/ Selector', Example w/ Selector: 'Goodbye w/ Selector'
// const subscribe = example.subscribe(val =>
//   PrintIntem.print('Example w/ Selector:' + val)
// );