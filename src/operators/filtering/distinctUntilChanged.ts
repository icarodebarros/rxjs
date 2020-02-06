import { PrintIntem } from '../../util/printItem';
import { from } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

/*
    distinctUntilChanged
    
    Only emit when the current value is different than the last

    💡 distinctUntilChanged uses === comparison by default, object references must match!
    💡 If you want to compare based on an object property, you can use distinctUntilKeyChanged instead!

*/

// // only output distinct values, based on the last emitted value
// const source$ = from([1, 1, 2, 2, 1, 3, 3]);

// source$
//   .pipe(distinctUntilChanged())
//   // output: 1,2,1,3
//   .subscribe(PrintIntem.print);

// --------------------------------------------------------------------------------------

// const sampleObject = { name: 'Test' };

// //Objects must be same reference
// const source$ = from([sampleObject, sampleObject, sampleObject]);

// // only emit distinct objects, based on last emitted value
// source$
//   .pipe(distinctUntilChanged())
//   // output: {name: 'Test'}
//   .subscribe(val => PrintIntem.print(`{name: ${val.name}}`));

  // --------------------------------------------------------------------------------------

  // only output distinct values, based on the last emitted value
const source$ = from([
    { name: 'Brian' },
    { name: 'Joe' },
    { name: 'Joe' },
    { name: 'Sue' }
  ]);
  
  source$
    // custom compare for name
    .pipe(distinctUntilChanged((prev, curr) => prev.name === curr.name))
    // output: { name: 'Brian }, { name: 'Joe' }, { name: 'Sue' }
    .subscribe(val => PrintIntem.print(`{name: ${val.name}}`));