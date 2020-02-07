import { PrintIntem } from '../../util/printItem';
import { interval, zip, from, merge, fromEvent } from 'rxjs';
import { sample, mapTo } from 'rxjs/operators';

/*
    sample
    
    Sample from source when provided observable emits
*/

//emit value every 1s
const source = interval(1000);
//sample last emitted value from source every 2s
const example = source.pipe(sample(interval(2000)));
//output: 2..4..6..8..
const subscribe = example.subscribe(val => PrintIntem.print(val));

// --------------------------------------------------------------------------------------

// const source = zip(
//     //emit 'Joe', 'Frank' and 'Bob' in sequence
//     from(['Joe', 'Frank', 'Bob']),
//     //emit value every 2s
//     interval(2000)
//   );
//   //sample last emitted value from source every 2.5s
//   const example = source.pipe(sample(interval(2500)));
//   //output: ["Joe", 0]...["Frank", 1]...........
//   const subscribe = example.subscribe(val => PrintIntem.print(val));

// --------------------------------------------------------------------------------------

//   const listener = merge(
//     fromEvent(document, 'mousedown').pipe(mapTo(false)),
//     fromEvent(document, 'mousemove').pipe(mapTo(true))
//   )
//     .pipe(sample(fromEvent(document, 'mouseup')))
//     .subscribe(isDragging => {
//       PrintIntem.print(`Were you dragging? ${isDragging}`);
//     });