import { PrintIntem } from '../../util/printItem';
import { timer, interval } from 'rxjs';
import { scan, window, mergeAll } from 'rxjs/operators';

/*
    window
    
    Observable of values for window of time

*/

//emit immediately then every 1s
const source = timer(0, 1000);
const example = source.pipe(window(interval(3000)));
const count = example.pipe(scan((acc, curr) => acc + 1, 0));
/*
  "Window 1:"
  0
  1
  2
  "Window 2:"
  3
  4
  5
  ...
*/
const subscribe = count.subscribe(val => PrintIntem.print(`Window ${val}:`));
const subscribeTwo = example
  .pipe(mergeAll())
  .subscribe(val => PrintIntem.print(val));

// --------------------------------------------------------------------------------------