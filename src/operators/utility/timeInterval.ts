import { PrintIntem } from '../../util/printItem';
import { fromEvent } from 'rxjs';
import { timeInterval, tap } from 'rxjs/operators';

/*
    timeInterval
    
    Convert an Observable that emits items into one that emits indications of the amount of time elapsed
    between those emissions

*/

fromEvent(document, 'mousedown')
  .pipe(
    timeInterval(),
    // tap(PrintIntem.print)
  )
  .subscribe(
    i =>
        PrintIntem.print(`milliseconds since last click: ${i.interval}`)
  );

// --------------------------------------------------------------------------------------