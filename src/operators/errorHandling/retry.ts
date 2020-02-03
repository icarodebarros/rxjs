import { PrintIntem } from "../../util/printItem";
import { interval, throwError, of } from 'rxjs';
import { mergeMap, retry } from 'rxjs/operators';

/*
    retry
    
    Retry an observable sequence a specific number of times should an error occur

    💡 Useful for retrying HTTP requests!
    💡 If you only want to retry in certain cases, check out retryWhen!
    💡 For non error cases check out repeat!
*/

//emit value every 1s
const source = interval(1000);
const example = source.pipe(
  mergeMap(val => {
    //throw error for demonstration
    if (val > 5) {
      return throwError('Error!');
    }
    return of(val);
  }),
  //retry 2 times on error
  retry(2)
);
/*
  output:
  0..1..2..3..4..5..
  0..1..2..3..4..5..
  0..1..2..3..4..5..
  "Error!: Retried 2 times then quit!"
*/
const subscribe = example.subscribe({
  next: val => PrintIntem.print(val),
  error: val => PrintIntem.print(`${val}: Retried 2 times then quit!`)
});

// --------------------------------------------------------------------------------------