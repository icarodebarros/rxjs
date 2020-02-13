import { PrintIntem } from '../../util/printItem';
import { interval } from 'rxjs';
import { windowCount, tap, mergeAll } from 'rxjs/operators';

/*
    windowCount
    
    Observable of values from source, emitted each time provided count is fulfilled

*/

//emit every 1s
const source = interval(1000);
const example = source.pipe(
  //start new window every 4 emitted values
  windowCount(4),
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
            "NEW WINDOW!"
            4
            5
            6
            7
          */
  )
  .subscribe(val => PrintIntem.print(val));

// --------------------------------------------------------------------------------------