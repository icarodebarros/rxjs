import { PrintIntem } from '../../util/printItem';
import { fromEvent } from 'rxjs';
import { find, mapTo, startWith, repeatWhen, filter, tap } from 'rxjs/operators';

/*
    find
    
    Emit the first item that passes predicate then complete

    💡 If you always want the first item emitted, regardless of condition, try first()!

*/

// streams
const clicks$ = fromEvent(document, 'click');

clicks$
  .pipe(
    tap((event: any) => console.log(event.x)),
    find((event: any) => event.x > 500),
    mapTo('Found!'),
    startWith('Find me!'),
    repeatWhen(() =>
      clicks$.pipe(filter((event: any) => event.x <= 500))
    )
  )
  .subscribe(PrintIntem.print);

// --------------------------------------------------------------------------------------