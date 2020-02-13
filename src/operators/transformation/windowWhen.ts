import { PrintIntem } from '../../util/printItem';
import { timer, interval } from 'rxjs';
import { windowWhen, tap, mergeAll } from 'rxjs/operators';

/*
    windowWhen
    
    Close window at provided time frame emitting observable of collected values from source

*/

//emit immediately then every 1s
const source = timer(0, 1000);
const example = source.pipe(
  //close window every 5s and emit observable of collected values from source
  windowWhen(() => interval(5000)),
  tap(_ => PrintIntem.print('NEW WINDOW!'))
);

const subscribeTwo = example
  .pipe(
    //window emits nested observable
    mergeAll()
    /*
      output:
      "NEW WINDOW!"
      0
      1
      2
      3
      4
      "NEW WINDOW!"
      5
      6
      7
      8
      9
    */
  )
  .subscribe(val => PrintIntem.print(val));

// --------------------------------------------------------------------------------------