import { PrintIntem } from '../../util/printItem';
import { from } from 'rxjs';
import { first } from 'rxjs/operators';

/*
    first
    
    Emit the first value or first to pass provided expression

    💡 The counterpart to first is last!
    💡 First will deliver an EmptyError to the Observer's error callback if the Observable completes before
    any next notification was sent. If you don't want this behavior, use take(1) instead

*/

// const source = from([1, 2, 3, 4, 5]);
// //no arguments, emit first value
// const example = source.pipe(first());
// //output: "First value: 1"
// const subscribe = example.subscribe(val => PrintIntem.print(`First value: ${val}`));

// --------------------------------------------------------------------------------------

// const source = from([1, 2, 3, 4, 5]);
// //emit first item to pass test
// const example = source.pipe(first(num => num === 5));
// //output: "First to pass test: 5"
// const subscribe = example.subscribe(val =>
//   PrintIntem.print(`First to pass test: ${val}`)
// );

// --------------------------------------------------------------------------------------

const source = from([1, 2, 3, 4, 5]);
//no value will pass, emit default
const example = source.pipe(first(val => val > 5, 'Nothing'));
//output: 'Nothing'
const subscribe = example.subscribe(val => PrintIntem.print(val));