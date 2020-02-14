import { PrintIntem } from '../../util/printItem';
import { interval, of } from 'rxjs';
import { take, finalize, delay, mergeMap, concatMap } from 'rxjs/operators';

/*
    finalize / finally
    
    Call a function when observable completes or errors

*/

//emit value in sequence every 1 second
const source = interval(1000);
//output: 0,1,2,3,4,5....
const example = source.pipe(
  take(5), //take only the first 5 values
  finalize(() => PrintIntem.print('Sequence complete')) // Execute when the observable completes
)
const subscribe = example.subscribe(val => PrintIntem.print(val));

// --------------------------------------------------------------------------------------

// const source = of(1, 2, 3, 4);
// const example = source.pipe(
//     concatMap((val) => of(val).pipe(delay(1000))),
//     finalize(() => PrintIntem.print('Sequence complete')) // Execute when the observable completes
// )
// const subscribe = example.subscribe(val => PrintIntem.print(val));