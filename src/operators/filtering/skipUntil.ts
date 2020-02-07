import { PrintIntem } from '../../util/printItem';
import { interval, timer } from 'rxjs';
import { skipUntil } from 'rxjs/operators';

/*
    skipUntil
    
    Skip emitted values from source until provided observable emits

*/

//emit every 1s
const source = interval(1000);
//skip emitted values from source until inner observable emits (6s)
const example = source.pipe(skipUntil(timer(6000)));
//output: 5...6...7...8........
const subscribe = example.subscribe(PrintIntem.print);

// --------------------------------------------------------------------------------------