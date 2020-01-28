import { interval/*, merge*/ } from "rxjs";
import { mapTo, merge, map, take } from 'rxjs/operators';
import { PrintIntem } from '../../util/printItem';

/*
    merge
    
    Turn multiple observables into a single observable
    
    💡 This operator can be used as either a static or instance method!
    💡 If order not throughput is a primary concern, try concat instead!
*/

// //emit every 2.5 seconds
// const first = interval(2500);
// //emit every 2 seconds
// const second = interval(2000);
// //emit every 1.5 seconds
// const third = interval(1500);
// //emit every 1 second
// const fourth = interval(1000);

// //emit outputs from one observable
// const example = merge( // from "rxjs"
//   first.pipe(mapTo('FIRST!')),
//   second.pipe(mapTo('SECOND!')),
//   third.pipe(mapTo('THIRD')),
//   fourth.pipe(mapTo('FOURTH'))
// );
// //output: "FOURTH", "THIRD", "SECOND!", "FOURTH", "FIRST!", "THIRD", "FOURTH"
// const subscribe = example.subscribe(PrintIntem.print);

// --------------------------------------------------------------------------------------

//emit every 2.5 seconds
const first = interval(2500).pipe(map((val) => 'First: ' + val));
//emit every 1 second
const second = interval(1000).pipe(map((val) => 'Second: ' + val));
//used as instance method
const example = first.pipe(merge(second), take(10)); //from 'rxjs/operators'
//output: 0,1,0,2....
const subscribe = example.subscribe(PrintIntem.print);