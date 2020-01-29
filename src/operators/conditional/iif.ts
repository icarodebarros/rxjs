import { PrintIntem } from "../../util/printItem";
import { of, interval, iif, fromEvent } from 'rxjs';
import { mergeMap, switchMap, throttleTime, filter, map } from 'rxjs/operators';

/*
    iif
    
    Subscribe to first or second observable based on a condition

*/

const r$ = of('R');
const x$ = of('X');

interval(1000)
  .pipe(mergeMap(v => iif(() => v % 4 === 0, r$, x$)))
  .subscribe(PrintIntem.print);

// output: R, X, X, X, R, X, X, X, etc...

// --------------------------------------------------------------------------------------

// const r$ = of(`I'm saying R!!`);
// const x$ = of(`X's always win!!`);

// fromEvent(document, 'mousemove')
//   .pipe(
//     throttleTime(50),
//     filter((move: MouseEvent) => move.clientY < 210),
//     map((move: MouseEvent) => move.clientY),
//     mergeMap(yCoord => iif(() => yCoord < 110, r$, x$))
//   )
//   .subscribe(PrintIntem.print);

// --------------------------------------------------------------------------------------

//   interval(1000)
//   .pipe(
//     mergeMap(v =>
//       iif(
//         () => !!(v % 2),
//         of(v)
//         // if not supplied defaults to EMPTY
//       )
//     )
//     // output: 1,3,5...
//   )
//   .subscribe(PrintIntem.print);