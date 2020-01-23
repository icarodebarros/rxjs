import{ PrintIntem } from '../../util/printItem';
import { of, concat, empty, interval } from 'rxjs';
import { startWith, delay } from 'rxjs/operators';
/*
    concat
    
    Subscribe to observables in order as previous completes
*/

// concat(
//     of(1, 2, 3),
//     // subscribed after first completes
//     of(4, 5, 6),
//     // subscribed after second completes
//     of(7, 8, 9)
//   )
//     // log: 1, 2, 3, 4, 5, 6, 7, 8, 9
//     .subscribe(PrintIntem.print);

// --------------------------------------------------------------------------------------

const delayedMessage = (message, delayedTime = 1000) => {
    // return empty().pipe(startWith(message), delay(delayedTime));
    return of(message).pipe(delay(delayedTime));
  };
concat(
delayedMessage('Get Ready!'),
delayedMessage(3),
delayedMessage(2),
delayedMessage(1),
delayedMessage('Go!'),
delayedMessage('', 2000)
)
.subscribe((message: any) => PrintIntem.print(message));

// --------------------------------------------------------------------------------------

// /*(Warning!) concat with source that does not complete*/
// // when source never completes, any subsequent observables never run
// concat(interval(1000), of('This', 'Never', 'Runs'))
//   // log: 1,2,3,4.....
//   .subscribe(console.log);