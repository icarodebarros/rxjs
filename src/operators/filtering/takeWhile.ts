import { PrintIntem } from '../../util/printItem';
import { takeWhile, filter } from 'rxjs/operators';
import { of } from 'rxjs';

/*
    takeWhile
    
    Emit values until provided expression is false.

    💡 When the optional inclusive parameter is set to true it will also emit the first item that didn't
    pass the predicate.

*/

// //emit 1,2,3,4,5
// const source$ = of(1, 2, 3, 4, 5);

// //allow values until value from source is greater than 4, then complete
// source$
//   .pipe(takeWhile(val => val <= 4))
//    // log: 1,2,3,4
//   .subscribe(PrintIntem.print);

// --------------------------------------------------------------------------------------

// const source$ = of(1, 2, 3, 9, 10);

// source$
//   // with inclusive flag, the value causing the predicate to return false will also be emitted
//   .pipe(takeWhile(val => val <= 3, true))
//   // log: 1, 2, 3, 9
//   .subscribe(PrintIntem.print);

// --------------------------------------------------------------------------------------

  // emit 3, 3, 3, 9, 1, 4, 5, 8, 96, 3, 66, 3, 3, 3
const source$ = of(3, 3, 3, 9, 1, 4, 5, 8, 96, 3, 66, 3, 3, 3);

// allow values until value from source equals 3, then complete
source$
  .pipe(takeWhile(it => it === 3))
  // log: 3, 3, 3
  .subscribe(val => PrintIntem.print(`takeWhile: ${val}`));

source$
  .pipe(filter(it => it === 3))
  // log: 3, 3, 3, 3, 3, 3, 3
  .subscribe(val => PrintIntem.print(`filter: ${val}`));