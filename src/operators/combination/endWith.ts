import{ PrintIntem } from '../../util/printItem';
import { of } from 'rxjs';
import { endWith, finalize } from 'rxjs/operators';
/*
    endWith
    
    Emit given value(s) on completion;
    💡 If you want to start with a value instead, check out 'startWith'!
    💡 If you want to perform an action on completion, but do not want to emit a value, check out 'finalize'!
*/

// const source$ = of('Hello', 'Friend', 'Goodbye');

// source$
//   // emit on completion
//   .pipe(endWith('Friend!'))
//   // 'Hello', 'Friend', 'Goodbye', 'Friend'
//   .subscribe((val) => PrintIntem.print(val));

// --------------------------------------------------------------------------------------

// const source$ = of('Hello', 'Friend');

// source$
//   // emit on completion
//   .pipe(endWith('Goodbye', 'Friend'))
//   // 'Hello', 'Friend', 'Goodbye', 'Friend'
//   .subscribe((val) => PrintIntem.print(val));

// --------------------------------------------------------------------------------------

const source$ = of('Hello', 'Friend');

source$
  // emit on completion
  .pipe(
    endWith('Goodbye', 'Friend'),
    // this function is invoked when unsubscribe methods are called
    finalize(() => PrintIntem.print('Finally'))
  )
  // 'Hello', 'Friend', 'Goodbye', 'Friend'
  .subscribe(val => PrintIntem.print(val));
// 'Finally'