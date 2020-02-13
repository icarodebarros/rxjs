import { PrintIntem } from '../../util/printItem';
import { interval } from 'rxjs';
import { take, toArray } from 'rxjs/operators';

/*
    toArray
    
    Collects all source emissions and emits them as an array when the source completes.

*/

interval(100)
  .pipe(
    take(10),
    toArray()
  )
  .subscribe(PrintIntem.print);

// output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// --------------------------------------------------------------------------------------