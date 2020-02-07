import { PrintIntem } from '../../util/printItem';
import { interval } from 'rxjs';
import { throttle, map } from 'rxjs/operators';

/*
    throttle
    
    Emit value on the leading edge of an interval, but suppress new values until durationSelector
    has completed.

*/

//emit value every 1 second
const source = interval(1000);
//throttle for 2 seconds, emit latest value
const example = source.pipe(throttle(val => interval(2000)));
//output: 0...3...6...9
const subscribe = example.subscribe(PrintIntem.print);

// --------------------------------------------------------------------------------------

// //emit value every 1 second
// const source = interval(1000);
// //incrementally increase the time to resolve based on source
// const promise = val =>
//   new Promise(resolve =>
//     setTimeout(() => resolve(`Resolved: ${val}`), val * 100)
//   );
// //when promise resolves emit item from source
// const example = source.pipe(
//   throttle(promise),
//   map(val => `Throttled off Promise: ${val}`)
// );

// const subscribe = example.subscribe(PrintIntem.print);