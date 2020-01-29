import { PrintIntem } from '../../util/printItem';
import { every, tap, delay } from 'rxjs/operators';
import { of, concat } from 'rxjs';

/*
    every
    
    If all values pass predicate before completion emit true, else false

*/

//emit 5 values
const source = of(0, 2, 3, 4, 5);
const example = source.pipe(
  tap((val) => PrintIntem.print(val)), // <<< OBS.: Quando o every reprova algum, já para de executar
  //is every value even?
  every(val => val % 2 === 0)
);
//output: false
const subscribe = example.subscribe(PrintIntem.print);

// --------------------------------------------------------------------------------------

// //emit 5 values
// const allEvens = of(2, 4, 6, 8, 10);
// const example = allEvens.pipe(
//   //is every value even?
//   every(val => val % 2 === 0)
// );
// //output: true
// const subscribe = example.subscribe(PrintIntem.print);

// --------------------------------------------------------------------------------------

// // Values arriving over time and completing stream prematurely due to every returning false
// const log = PrintIntem.print;
// const returnCode = request => (Number.isInteger(request) ? 200 : 400);
// const fakeRequest = request =>
//   of({ code: returnCode(request) }).pipe(
//     tap(_ => log(request)),
//     delay(1000)
//   );

// const apiCalls$ = concat(
//   fakeRequest(1),
//   fakeRequest('invalid payload'),
//   fakeRequest(2) //this won't execute as every will return false for previous line
// ).pipe(
//   every(e => e.code === 200),
//   tap(e => log(`all request successful: ${e}`))
// );

// apiCalls$.subscribe();