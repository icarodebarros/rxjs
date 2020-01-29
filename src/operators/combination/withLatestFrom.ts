import { PrintIntem } from "../../util/printItem";
import { interval } from 'rxjs';
import { withLatestFrom, map } from 'rxjs/operators';

/*
    withLatestFrom
    
    Also provide the last value from another observable

    💡 If you want the last emission any time a variable number of observables emits, try combinelatest!    
*/

//emit every 5s
const source = interval(5000);
//emit every 1s
const secondSource = interval(1000);
const example = source.pipe(
  withLatestFrom(secondSource),
  map(([first, second]) => {
    return `First Source (5s): ${first} Second Source (1s): ${second}`;
  })
);
/*
  "First Source (5s): 0 Second Source (1s): 4"
  "First Source (5s): 1 Second Source (1s): 9"
  "First Source (5s): 2 Second Source (1s): 14"
  ...
*/
const subscribe = example.subscribe(PrintIntem.print);

// --------------------------------------------------------------------------------------

// //emit every 5s
// const source = interval(5000);
// //emit every 1s
// const secondSource = interval(1000);
// //withLatestFrom slower than source
// const example = secondSource.pipe(
//   //both sources must emit at least 1 value (5s) before emitting
//   withLatestFrom(source),
//   map(([first, second]) => {
//     return `Source (1s): ${first} Latest From (5s): ${second}`;
//   })
// );
// /*
//   "Source (1s): 4 Latest From (5s): 0"
//   "Source (1s): 5 Latest From (5s): 0"
//   "Source (1s): 6 Latest From (5s): 0"
//   ...
// */
// const subscribe = example.subscribe(PrintIntem.print);