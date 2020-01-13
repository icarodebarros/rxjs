import{ PrintIntem } from '../../util/printItem';
import { timer, combineLatest } from 'rxjs';
/*
    combineLatest

    When any observable emits a value, emit the last emitted value from each.
    obs.:combineAll can be used to apply combineLatest to emitted observables when a source completes!

    Why use combineLatest?
        This operator is best used when you have multiple, long-lived observables that rely on each other for some calculation or determination. Basic examples of this can be seen in example three, where events from multiple buttons are being combined to produce a count of each and an overall total, or a calculation of BMI from the RxJS documentation.
        Be aware that combineLatest will not emit an initial value until each observable emits at least one value. This is the same behavior as withLatestFrom and can be a gotcha as there will be no output and no error but one (or more) of your inner observables is likely not functioning as intended, or a subscription is late.
        Lastly, if you are working with observables that only emit one value, or you only require the last value of each before completion, forkJoin is likely a better option.
*/

// Exemple 1:

// timerOne emits first value at 1s, then once every 4s
const timerOne$ = timer(1000, 4000);
// timerTwo emits first value at 2s, then once every 4s
const timerTwo$ = timer(2000, 4000);
// timerThree emits first value at 3s, then once every 4s
const timerThree$ = timer(3000, 4000);

// when one timer emits, emit the latest values from each timer as an array
combineLatest(timerOne$, timerTwo$, timerThree$).subscribe(
  ([timerValOne, timerValTwo, timerValThree]) => {
    /*
      Example:
    timerOne first tick: 'Timer One Latest: 1, Timer Two Latest:0, Timer Three Latest: 0
    timerTwo first tick: 'Timer One Latest: 1, Timer Two Latest:1, Timer Three Latest: 0
    timerThree first tick: 'Timer One Latest: 1, Timer Two Latest:1, Timer Three Latest: 1
  */
    PrintIntem.print(
      `Timer One Latest: ${timerValOne},
     Timer Two Latest: ${timerValTwo},
     Timer Three Latest: ${timerValThree}.`
    );
  }
);
/* output:
Timer One Latest: 0,                   ,                      . // não emite
Timer One Latest: 0, Timer Two Latest:0,                      . // não emite

Timer One Latest: 0, Timer Two Latest:0, Timer Three Latest: 0. // primeiro output (após 3 seg) [repetição, repetição, atual]
Timer One Latest: 1, Timer Two Latest:0, Timer Three Latest: 0. // [atual, repetição, repetição]
Timer One Latest: 1, Timer Two Latest:1, Timer Three Latest: 0. // [repetição, atual, repetição]
Timer One Latest: 1, Timer Two Latest:1, Timer Three Latest: 1. // [repetição, repetição, atual]
Timer One Latest: 2, Timer Two Latest:1, Timer Three Latest: 1.
Timer One Latest: 2, Timer Two Latest:2, Timer Three Latest: 1.
Timer One Latest: 2, Timer Two Latest:2, Timer Three Latest: 2.
Timer One Latest: 3, Timer Two Latest:2, Timer Three Latest: 2.
...

*/
// --------------------------------------------------------------------------------------
// Exemple 2 

// const timerOne$ = timer(1000, 4000);
// const timerTwo$ = timer(2000, 4000);
// const timerThree$ = timer(3000, 4000);

// combineLatest(
//   timerOne$,
//   timerTwo$,
//   timerThree$,
//   // combineLatest also takes an optional projection function
//   (one, two, three) => {
//     return `Timer One (Proj) Latest: ${one}, 
//               Timer Two (Proj) Latest: ${two}, 
//               Timer Three (Proj) Latest: ${three}`;
//   }
// ).subscribe(PrintIntem.print);
