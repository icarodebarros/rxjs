import { PrintIntem } from '../../util/printItem';
import { of } from 'rxjs';
import { delay, concatMap, timeout, catchError } from 'rxjs/operators';

/*
    timeout
    
    Error if no value is emitted before specified duration

*/

// simulate request
function makeRequest(timeToDelay) {
    return of('Request Complete!').pipe(delay(timeToDelay));
  }
  
  of(4000, 3000, 2000)
    .pipe(
      concatMap(duration =>
        makeRequest(duration).pipe(
          timeout(2500),
          catchError(error => of(`Request timed out after: ${duration}`))
        )
      )
    )
    /*
     *  "Request timed out after: 4000"
     *  "Request timed out after: 3000"
     *  "Request Complete!"
     */
    .subscribe(PrintIntem.print)

// --------------------------------------------------------------------------------------