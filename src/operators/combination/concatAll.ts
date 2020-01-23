import{ PrintIntem } from '../../util/printItem';
import { of, concat, empty, interval } from 'rxjs';
import { map, concatAll, take } from 'rxjs/operators';
/*
    concatAll
    
    Collect observables and subscribe to next when previous completes
*/

// //emit a value every 2 seconds
// const source = interval(2000);
// const example = source.pipe(
//   //for demonstration, add 10 to and return as observable
//   map(val => of(val + 10)),
//   //merge values from inner observable
//   concatAll()
// );
// //output: 'Example with Basic Observable 10', 'Example with Basic Observable 11'...
// const subscribe = example.subscribe(val =>
//     PrintIntem.print(`Example with Basic Observable: ${val}`)
// );

// --------------------------------------------------------------------------------------

// //create and resolve basic promise
// const samplePromise = val => new Promise(resolve => resolve(val));
// //emit a value every 2 seconds
// const source = interval(2000);

// const example = source.pipe(
//   map(val => samplePromise(val)),
//   //merge values from resolved promise
//   concatAll()
// );
// //output: 'Example with Promise 0', 'Example with Promise 1'...
// const subscribe = example.subscribe(val =>
//     PrintIntem.print(`Example with Promise: ${val}`)
// );

// --------------------------------------------------------------------------------------

const obs1 = interval(1000).pipe(take(5));
const obs2 = interval(500).pipe(take(2));
const obs3 = interval(2000).pipe(take(1));
//emit three observables
const source = of(obs1, obs2, obs3);
//subscribe to each inner observable in order when previous completes
const example = source.pipe(concatAll());
/*
  output: 0,1,2,3,4,0,1,0
  How it works...
  Subscribes to each inner observable and emit values, when complete subscribe to next
  obs1: 0,1,2,3,4 (complete)
  obs2: 0,1 (complete)
  obs3: 0 (complete)
*/

const subscribe = example.subscribe(val => PrintIntem.print(val));