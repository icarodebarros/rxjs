import{ PrintIntem } from '../../util/printItem';
import { of, forkJoin, interval, throwError } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { delay, take, mergeMap, tap, catchError } from 'rxjs/operators';
/*
    forkJoin
    
    When all observables complete, emit the last emitted value from each as an array
    
    💡 If you want corresponding emissions from multiple observables as they occur, try zip!
    ⚠ If an inner observable does not complete forkJoin will never emit a value!
*/

// /*
//   when all observables complete, provide the last
//   emitted value from each as dictionary
// */
// forkJoin(
//     // as of RxJS 6.5+ we can use a dictionary of sources
//     {
//       google: ajax.getJSON('https://api.github.com/users/google'),
//       microsoft: ajax.getJSON('https://api.github.com/users/microsoft'),
//       users: ajax.getJSON('https://api.github.com/users')
//     }
//   )
//     // { google: object, microsoft: object, users: array }
//     .subscribe((val) => {
//         PrintIntem.print(val.google);
//         PrintIntem.print(val.microsoft);
//         PrintIntem.print(val.users);
//     });

// --------------------------------------------------------------------------------------

// const myPromise = val =>
//   new Promise(resolve =>
//     setTimeout(() => resolve(`Promise Resolved: ${val}`), 5000)
//   );

// /*
//   when all observables complete, give the last
//   emitted value from each as an array
// */
// const example = forkJoin(
//   //emit 'Hello' immediately
//   of('Hello'),
//   //emit 'World' after 1 second
//   of('World').pipe(delay(1000)),
//   //emit 0 after 1 second
//   interval(1000).pipe(take(1)),
//   //emit 0...1 in 1 second interval
//   interval(1000).pipe(take(2)),
//   //promise that resolves to 'Promise Resolved' after 5 seconds
//   myPromise('RESULT')
// );
// //output: ["Hello", "World", 0, 1, "Promise Resolved: RESULT"]
// const subscribe = example.subscribe(val => PrintIntem.print(val));

// --------------------------------------------------------------------------------------

// const myPromise = val =>
//   new Promise(resolve =>
//     setTimeout(() => resolve(`Promise Resolved: ${val}`), 5000)
//   );

// const source = of([1, 2, 3, 4, 5]);
// //emit array of all 5 results
// const example = source
//     .pipe(
//         tap(q => PrintIntem.print(`Side effect (${q})`)),
//         mergeMap(q => forkJoin(...q.map(myPromise))));
// /*
//   output:
//   [
//    "Promise Resolved: 1",
//    "Promise Resolved: 2",
//    "Promise Resolved: 3",
//    "Promise Resolved: 4",
//    "Promise Resolved: 5"
//   ]
// */
// const subscribe = example.subscribe(val =>  PrintIntem.print(val));

// --------------------------------------------------------------------------------------

// /*
//   when all observables complete, give the last
//   emitted value from each as an array
// */
// const example = forkJoin(
//     //emit 'Hello' immediately
//     of('Hello'),
//     //emit 'World' after 1 second
//     of('World').pipe(delay(1000)),
//     // throw error
//     throwError('This will error')
//   ).pipe(catchError(error => of(error)));
//   //output: 'This will Error'
//   const subscribe = example.subscribe(val => PrintIntem.print(val));

// --------------------------------------------------------------------------------------

/*
  when all observables complete, give the last
  emitted value from each as an array
*/
const example = forkJoin(
    //emit 'Hello' immediately
    of('Hello'),
    //emit 'World' after 1 second
    of('World').pipe(delay(1000)),
    // throw error
    throwError('This will error').pipe(catchError(error => of(error)))
  );
  //output: ["Hello", "World", "This will error"]
  const subscribe = example.subscribe(val => PrintIntem.print(val));