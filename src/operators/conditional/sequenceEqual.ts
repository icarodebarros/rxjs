import { PrintIntem } from "../../util/printItem";
import { from, of, fromEvent } from 'rxjs';
import { switchMap, sequenceEqual, map, tap, bufferCount, mergeMap } from 'rxjs/operators';

/*
    sequenceEqual
    
    Compares emitted sequence to expected sequence for match

*/

// const expectedSequence = from([4, 5, 6]);

// of([1, 2, 3], [4, 5, 6], [7, 8, 9])
//   .pipe(switchMap(arr => from(arr).pipe(sequenceEqual(expectedSequence))))
//   .subscribe(PrintIntem.print);

// //output: false, true, false

// --------------------------------------------------------------------------------------

const expectedSequence = from(['q', 'w', 'e', 'r', 't', 'y']);
// const setResult = text => (document.getElementById('result').innerText = text);
const setResult = text => PrintIntem.print('RESULT: ' + text);

fromEvent(document, 'keydown')
  .pipe(
    map((e: KeyboardEvent) => e.key),
    tap(v => setResult(v)),
    bufferCount(6),
    mergeMap(keyDowns =>
      from(keyDowns).pipe(
        sequenceEqual(expectedSequence),
        tap(isItQwerty => setResult(isItQwerty ? 'WELL DONE!' : 'TYPE AGAIN!'))
      )
    )
  )
  .subscribe(e => PrintIntem.print(`did you say qwerty? ${e}`));