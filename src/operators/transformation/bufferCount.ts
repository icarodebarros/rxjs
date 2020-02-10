import { PrintIntem } from '../../util/printItem';
import { interval, of, fromEvent } from 'rxjs';
import { bufferCount, tap, map, mergeMap } from 'rxjs/operators';

/*
    bufferCount
    
    Collect emitted values until provided number is fulfilled, emit as array

*/

// //Create an observable that emits a value every second
// const source = interval(1000);
// //After three values are emitted, pass on as an array of buffered values
// const bufferThree = source.pipe(bufferCount(3));
// //Print values to console
// //ex. output [0,1,2]...[3,4,5]
// const subscribe = bufferThree.subscribe(val =>
//   PrintIntem.print('Buffered Values:' + val)
// );

// --------------------------------------------------------------------------------------

//Create an observable that emits a value every second
const source = interval(1000);
/*
bufferCount also takes second argument, when to start the next buffer
for instance, if we have a bufferCount of 3 but second argument (startBufferEvery) of 1:
1st interval value:
buffer 1: [0]
2nd interval value:
buffer 1: [0,1]
buffer 2: [1]
3rd interval value:
buffer 1: [0,1,2] Buffer of 3, emit buffer
buffer 2: [1,2]
buffer 3: [2]
4th interval value:
buffer 2: [1,2,3] Buffer of 3, emit buffer
buffer 3: [2, 3]
buffer 4: [3]
*/
const bufferEveryOne = source.pipe(bufferCount(3, 1));
//Print values to console
const subscribe = bufferEveryOne.subscribe(val =>
  PrintIntem.print('Start Buffer Every 1:' + val)
);

// --------------------------------------------------------------------------------------

// const fakeKeyPressesPost = keypresses =>
//   of(201).pipe(
//     tap(_ => {
//       PrintIntem.print(`received key presses are: ${keypresses}`);
//       document.getElementById('output').innerText = keypresses;
//     })
//   );

// fromEvent(document, 'keydown')
//   .pipe(
//     map((e: KeyboardEvent) => e.key),
//     bufferCount(5),
//     mergeMap(fakeKeyPressesPost)
//   )
//   .subscribe();