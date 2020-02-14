import { PrintIntem } from '../../util/printItem';
import { of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

/*
    tap / do
    
    Transparently perform actions or side-effects, such as logging.
    
    💡 If you are using as a pipeable operator, do is known as tap!
*/

// const source = of(1, 2, 3, 4, 5);
// // transparently log values from source with 'tap'
// const example = source.pipe(
//   tap(val => PrintIntem.print(`BEFORE MAP: ${val}`)),
//   map(val => val + 10),
//   tap(val => PrintIntem.print(`AFTER MAP: ${val}`))
// );

// //'tap' does not transform values
// //output: 11...12...13...14...15
// const subscribe = example.subscribe(PrintIntem.print);

// --------------------------------------------------------------------------------------

const source = of(1, 2, 3, 4, 5);

// tap also accepts an object map to log next, error, and complete
const example = source
  .pipe(
    map(val => val + 10),
    tap({
      next: val => {
        // on next 11, etc.
        PrintIntem.print('on next ' + val);
      },
      error: error => {
        PrintIntem.print('on error ' + error.message);
      },
      complete: () => PrintIntem.print('on complete')
    })
  )
  // output: 11, 12, 13, 14, 15
  .subscribe(val => PrintIntem.print(val));