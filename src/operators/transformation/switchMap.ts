import { PrintIntem } from '../../util/printItem';
import { fromEvent, interval, merge, empty, timer } from 'rxjs';
import { switchMap, mapTo, map, startWith, scan, takeWhile } from 'rxjs/operators';

/*
    switchMap
    
    Map to observable, complete previous inner observable, emit values

    💡 If you would like more than one inner subscription to be maintained, try mergeMap!
    💡 This operator is generally considered a safer default to mergeMap!
    💡 This operator can cancel in-flight network requests!

        The main difference between switchMap and other flattening operators is the cancelling effect. On each
    emission the previous inner observable (the result of the function you supplied) is cancelled and the
    new observable is subscribed. You can remember this by the phrase switch to a new observable.
        This works perfectly for scenarios like typeaheads where you are no longer concerned with the
    response of the previous request when a new input arrives. This also is a safe option in situations
    where a long lived inner observable could cause memory leaks, for instance if you used mergeMap with
    an interval and forgot to properly dispose of inner subscriptions. Remember, switchMap maintains only
    one inner subscription at a time, this can be seen clearly in the first example.
        Be careful though, you probably want to avoid switchMap in scenarios where every request needs to
    complete, think writes to a database. switchMap could cancel a request if the source emits quickly
    enough. In these scenarios mergeMap is the correct option.

*/

fromEvent(document, 'click')
  .pipe(
    // restart counter on every click
    switchMap(() => interval(1000))
  )
  .subscribe(PrintIntem.print);

// --------------------------------------------------------------------------------------

// const COUNTDOWN_SECONDS = 10;

// const interval$ = interval(1000).pipe(mapTo(-1));
// let paused = true;
// const pauseResume$ = fromEvent(document, 'click').pipe(map(_ => paused = !paused));

// pauseResume$
//   .pipe(
//     startWith(true),
//     switchMap(val => (val ? interval$ : empty())),
//     scan((acc, curr) => (curr ? curr + acc : acc), COUNTDOWN_SECONDS),
//     takeWhile(v => v >= 0)
//   )
//   .subscribe((val: any) => PrintIntem.print(val));

// --------------------------------------------------------------------------------------

//   // switch to new inner observable when source emits, emit result of project function
// timer(0, 5000)
// .pipe(
//   switchMap(
//     _ => interval(2000),
//     (outerValue, innerValue, outerIndex, innerIndex) => ({
//       outerValue,
//       innerValue,
//       outerIndex,
//       innerIndex
//     })
//   )
// )
// /*
//   Output:
//   {outerValue: 0, innerValue: 0, outerIndex: 0, innerIndex: 0}
//   {outerValue: 0, innerValue: 1, outerIndex: 0, innerIndex: 1}
//   {outerValue: 1, innerValue: 0, outerIndex: 1, innerIndex: 0}
//   {outerValue: 1, innerValue: 1, outerIndex: 1, innerIndex: 1}
// */
// .subscribe(v => PrintIntem.print(`{outerValue: ${v.outerValue}, innerValue: ${v.innerValue}, outerIndex: ${v.outerIndex}, innerIndex: ${v.innerIndex}}`));