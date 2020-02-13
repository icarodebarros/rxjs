import { PrintIntem } from '../../util/printItem';
import { timer, interval } from 'rxjs';
import { windowToggle, tap, mergeAll } from 'rxjs/operators';

/*
    windowToggle
    
    Collect and emit observable of values from source between opening and closing emission

*/

//emit immediately then every 1s
const source = timer(0, 1000);
//toggle window on every 5
const toggle = interval(5000);
const example = source.pipe(
  //turn window on every 5s
//   windowToggle(toggle, val => interval(val * 1000)),
  windowToggle(toggle, () => interval(4000)),
//   windowToggle(toggle, () => interval(5000)),
//   windowToggle(toggle, () => interval(6000)),  
  tap(_ => PrintIntem.print('NEW WINDOW!'))
);

const subscribeTwo = example
  .pipe(
    //window emits nested observable
    mergeAll()
    /*
            output:
            "NEW WINDOW!"
            5
            "NEW WINDOW!"
            10
            11
            "NEW WINDOW!"
            15
            16
            "NEW WINDOW!"
            20
            21
            22
          */
  )
  .subscribe(val => PrintIntem.print(val));

// --------------------------------------------------------------------------------------