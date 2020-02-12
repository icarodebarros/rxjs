import { PrintIntem } from '../../util/printItem';
import { fromEvent, interval } from 'rxjs';
import { mergeScan, scan, map, takeUntil } from 'rxjs/operators';

/*
    mergeScan
    
    Accumulate value over time via merged observables

*/

// streams
const mouseDown$ = fromEvent(document, 'mousedown');
const mouseUp$ = fromEvent(document, 'mouseup');

// accumulate time mouse held down over time
mouseDown$
  .pipe(
    mergeScan((acc, curr) => {
      return interval(1000).pipe(
        // scan((a, _) => ++a, 0),
        map((val: any) => val + acc + 1),
        takeUntil(mouseUp$)
      );
    }, 0)
    // output: 1s...2s...3s...4s...
  )
  .subscribe(val => PrintIntem.print(`Total mousedown time: ${val}s`));

// --------------------------------------------------------------------------------------