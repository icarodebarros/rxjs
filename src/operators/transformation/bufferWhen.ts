import { PrintIntem } from '../../util/printItem';
import { interval } from 'rxjs';
import { bufferWhen } from 'rxjs/operators';

/*
    bufferWhen
    
    Collect all values until closing selector emits, emit buffered values
*/

//emit value every 1 second
const oneSecondInterval = interval(1000);
//return an observable that emits value every 5 seconds
const fiveSecondInterval = () => interval(5000);
//every five seconds, emit buffered values
const bufferWhenExample = oneSecondInterval.pipe(
  bufferWhen(fiveSecondInterval)
);
//log values
//ex. output: [0,1,2,3]...[4,5,6,7,8]
const subscribe = bufferWhenExample.subscribe(val =>
  PrintIntem.print('Emitted Buffer: ' + val)
);

// --------------------------------------------------------------------------------------