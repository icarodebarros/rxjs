import { PrintIntem } from "../../util/printItem";
import { empty, interval, fromEvent, merge } from 'rxjs';
import { mapTo, startWith, switchMap, scan, takeWhile } from 'rxjs/operators';

/*
    empty
    
    Observable that immediately completes

*/

// //output: 'Complete!'
// const subscribe = empty().subscribe({
//     next: () => PrintIntem.print('Next'),
//     complete: () => PrintIntem.print('Complete!')
//   })

// --------------------------------------------------------------------------------------

// const countdownSeconds = 10;
// const setHTML = id => val => (document.getElementById(id).innerHTML = val);
// const pauseButton = document.getElementById('pause');
// const resumeButton = document.getElementById('resume');
// const interval$ = interval(1000).pipe(mapTo(-1));

// const pause$ = fromEvent(pauseButton, 'click').pipe(mapTo(false));
// const resume$ = fromEvent(resumeButton, 'click').pipe(mapTo(true));

// const timer$ = merge(pause$, resume$)
//   .pipe(
//     startWith(true),
//     // if timer is paused return empty observable
//     switchMap(val => (val ? interval$ : empty())),
//     scan((acc, curr) => (curr ? curr + acc : acc), countdownSeconds),
//     takeWhile(v => v >= 0)
//   )
//   .subscribe(setHTML('remaining'));