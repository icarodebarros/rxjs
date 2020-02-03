import { PrintIntem } from '../../util/printItem';
import { interval, Subject, ReplaySubject } from 'rxjs';
import { take, tap, mapTo, multicast } from 'rxjs/operators';

/*
    multicast
    
    Share source utilizing the provided Subject
*/

//emit every 2 seconds, take 5
const source = interval(2000).pipe(take(5));

const example = source.pipe(
  //since we are multicasting below, side effects will be executed once
  tap(() => PrintIntem.print('Side Effect #1')),
  mapTo('Result!')
);

//subscribe subject to source upon connect()
const multi: any = example.pipe(multicast(() => new Subject()));
/*
  subscribers will share source
  output:
  "Side Effect #1"
  "Result!"
  "Result!"
  ...
*/
const subscriberOne = multi.subscribe(val => PrintIntem.print(val));
const subscriberTwo = multi.subscribe(val => PrintIntem.print(val));
//subscribe subject to source
multi.connect();

// --------------------------------------------------------------------------------------

// //emit every 2 seconds, take 5
// const source = interval(2000).pipe(take(5));

// //example with ReplaySubject
// const example = source.pipe(
//   //since we are multicasting below, side effects will be executed once
//   tap(_ => PrintIntem.print('Side Effect #2')),
//   mapTo('Result Two!')
// );
// //can use any type of subject
// const multi: any = example.pipe(multicast(() => new ReplaySubject(5)));
// //subscribe subject to source
// multi.connect();

// setTimeout(() => {
//   /*
//    subscriber will receieve all previous values on subscription because
//    of ReplaySubject
//    */
//   const subscriber = multi.subscribe(val => PrintIntem.print(val));
// }, 5000);