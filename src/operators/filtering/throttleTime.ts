import { PrintIntem } from '../../util/printItem';
import { interval, asyncScheduler } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

/*
    throttleTime
    
    Emit first value then ignore for specified duration

*/

// emit value every 1 second
const source = interval(1000);
/*
  emit the first value, then ignore for 5 seconds. repeat...
*/
const example = source.pipe(throttleTime(5000));
// output: 0...6...12
const subscribe = example.subscribe(PrintIntem.print);

// --------------------------------------------------------------------------------------

// const source = interval(1000);
// /*
//   emit the first value, then ignore for 5 seconds. repeat...
// */
// const example = source.pipe(throttleTime(
//   5000,
//   asyncScheduler,
//   { trailing: true }
// ));
// // output: 5...11...17
// const subscribe = example.subscribe(PrintIntem.print);