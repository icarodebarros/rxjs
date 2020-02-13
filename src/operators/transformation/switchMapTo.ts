import { PrintIntem } from '../../util/printItem';
import { fromEvent, interval } from 'rxjs';
import { scan, startWith, switchMapTo, takeWhile, finalize } from 'rxjs/operators';

/*
    switchMapTo
    
    Map to same inner observable, complete previous inner observable

    💡 If you need to consider the emitted value from the source, try switchMap!

*/

const COUNTDOWN_TIME = 10;

// streams
const click$ = fromEvent(document, 'click');
const countdown$ = interval(1000).pipe(
  scan((acc, _) => --acc, COUNTDOWN_TIME),
  startWith(COUNTDOWN_TIME)
);

click$
  .pipe(
    switchMapTo(countdown$),
    takeWhile(val => val >= 0),
    finalize(() => PrintIntem.print("We're done here!"))
  )
  .subscribe((val: any) => PrintIntem.print(val));

// --------------------------------------------------------------------------------------