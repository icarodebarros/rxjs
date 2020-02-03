import { PrintIntem } from "../../util/printItem";
import { throwError, of, timer, from } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';

/*
    catch / catchError
    
    Gracefully handle errors in an observable sequence

*/

// //emit error
// const source = throwError('This is an error!');
// //gracefully handle error, returning observable with error message
// const example = source.pipe(catchError(val => of(`I caught: ${val}`)));
// //output: 'I caught: This is an error'
// const subscribe = example.subscribe(PrintIntem.print);

// --------------------------------------------------------------------------------------

//create promise that immediately rejects
const myBadPromise = () =>
  new Promise((resolve, reject) => reject('Rejected!'));
//emit single value after 1 second
const source = timer(1000);
//catch rejected promise, returning observable containing error message
const example = source.pipe(
  mergeMap(_ =>
    from(myBadPromise()).pipe(catchError(error => of(`Bad Promise: ${error}`)))
  )
);
//output: 'Bad Promise: Rejected'
const subscribe = example.subscribe(PrintIntem.print);

// --------------------------------------------------------------------------------------

// const fakeRequest$ = of().pipe(
//     tap(_ => console.log('fakeRequest')),
//     throwError
//   );
  
//   const iWillContinueListening$ = fromEvent(
//     document.getElementById('continued'),
//     'click'
//   ).pipe(
//     switchMap(_ => fakeRequest$.pipe(catchError(_ => of('keep on clicking!!!'))))
//   );
  
//   const iWillStopListening$ = fromEvent(
//     document.getElementById('stopped'),
//     'click'
//   ).pipe(
//     switchMap(_ => fakeRequest$),
//     catchError(_ => of('no more requests!!!'))
//   );
  
//   iWillContinueListening$.subscribe(console.log);
//   iWillStopListening$.subscribe(console.log);