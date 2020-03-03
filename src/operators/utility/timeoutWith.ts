import { PrintIntem } from '../../util/printItem';
import { of } from 'rxjs';
import { delay, concatMap, timeoutWith } from 'rxjs/operators';

/*
    timeoutWith
    
    Subscribe to second Observable if no emission occurs in given time span

*/

const fakeRequest = delayTime => of('!response!').pipe(delay(delayTime));
const requestTimeoutLogger = of('logging request timeout');
const timeoutThreshold = 1000;

of(timeoutThreshold + 1, timeoutThreshold - 1, timeoutThreshold + 3)
  .pipe(
    concatMap(e =>
      fakeRequest(e).pipe(timeoutWith(timeoutThreshold, requestTimeoutLogger))
    )
  )
  .subscribe(PrintIntem.print);

/*
  OUTPUT:
    logging request timeout
    !response!
    logging request timeout
*/

// --------------------------------------------------------------------------------------