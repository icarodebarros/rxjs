import { PrintIntem } from '../../util/printItem';
import { from, merge, partition, of } from 'rxjs';
import { map/*, partition*/, catchError} from 'rxjs/operators';

/*
    partition
    
    Split one observable into two based on provided predicate

    OBS.: from 'rxjs/operators' IS DEPRECATED!

*/

// const source = from([1, 2, 3, 4, 5, 6]);
// //first value is true, second false
// // const [evens, odds] = source.pipe(partition(val => val % 2 === 0)); 
// const [evens, odds] = partition(source, val => val % 2 === 0); 
// /*
//   Output:
//   "Even: 2"
//   "Even: 4"
//   "Even: 6"
//   "Odd: 1"
//   "Odd: 3"
//   "Odd: 5"
// */
// const subscribe = merge(
//   evens.pipe(map(val => `Even: ${val}`)),
//   odds.pipe(map(val => `Odd: ${val}`))
// ).subscribe(val => PrintIntem.print(val));

// --------------------------------------------------------------------------------------

const source = from([1, 2, 3, 4, 5, 6]);
//if greater than 3 throw
const example = source.pipe(
  map(val => {
    if (val > 3) {
      throw `${val} greater than 3!`;
    }
    return { success: val };
  }),
  catchError(val => of({ error: val }))
);
//split on success or error
// const [success, error] = example.pipe(partition(res => res.success));
const [success, error] = partition(example, (res: any) => res.success);
/*
  Output:
  "Success! 1"
  "Success! 2"
  "Success! 3"
  "Error! 4 greater than 3!"
*/
const subscribe = merge(
  success.pipe(map(val => `Success! ${val.success}`)),
  error.pipe(map(val => `Error! ${val.error}`))
).subscribe(val => PrintIntem.print(val));

// --------------------------------------------------------------------------------------