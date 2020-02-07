import { PrintIntem } from '../../util/printItem';
import { interval, throwError, of } from 'rxjs';
import { take, ignoreElements, mergeMap } from 'rxjs/operators';

/*
    ignoreElements
    
    Ignore everything but complete and error

*/

// //emit value every 100ms
// const source = interval(100);
// //ignore everything but complete
// const example = source.pipe(
//   take(5),
//   ignoreElements()
// );
// //output: "COMPLETE!"
// const subscribe = example.subscribe(
//   val => PrintIntem.print(`NEXT: ${val}`),
//   val => PrintIntem.print(`ERROR: ${val}`),
//   () => PrintIntem.print('COMPLETE!')
// );

// --------------------------------------------------------------------------------------

//emit value every 100ms
const source = interval(100);
//ignore everything but error
const error = source.pipe(
  mergeMap(val => {
    if (val === 4) {
      return throwError(`ERROR AT ${val}`);
    }
    return of(val);
  }),
  ignoreElements()
);
//output: "ERROR: ERROR AT 4"
const subscribe = error.subscribe(
  val => PrintIntem.print(`NEXT: ${val}`),
  val => PrintIntem.print(`ERROR: ${val}`),
  () => PrintIntem.print('SECOND COMPLETE!')
);