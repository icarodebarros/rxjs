import { PrintIntem } from '../../util/printItem';
import { of } from 'rxjs';
import { delay, repeat } from 'rxjs/operators';

/*
    repeat

    Repeats an observable on completion.
    💡 Like retry but for non error cases!
*/

const delayedThing = of('delayed value').pipe(delay(2000));

delayedThing
  .pipe(repeat(3))
  // delayed value...delayed value...delayed value
  .subscribe(PrintIntem.print);

// --------------------------------------------------------------------------------------