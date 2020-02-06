import { PrintIntem } from '../../util/printItem';
import { from, fromEvent } from 'rxjs';
import { distinctUntilKeyChanged, pluck } from 'rxjs/operators';

/*
    distinctUntilKeyChanged
    
    Only emit when the specified key value has changed

*/

// // only output distinct values, based on the last emitted value
// const source$ = from([
//     { name: 'Brian' },
//     { name: 'Joe' },
//     { name: 'Joe' },
//     { name: 'Sue' }
//   ]);
  
//   source$
//     // custom compare based on name property
//     .pipe(distinctUntilKeyChanged('name'))
//     // output: { name: 'Brian }, { name: 'Joe' }, { name: 'Sue' }
//     .subscribe(val => PrintIntem.print(`{name: ${val.name}}`));

// --------------------------------------------------------------------------------------

const keys$ = fromEvent(document, 'keyup')
  .pipe(
    distinctUntilKeyChanged<KeyboardEvent>('code'),
    pluck('key')
  );

keys$.subscribe(PrintIntem.print);