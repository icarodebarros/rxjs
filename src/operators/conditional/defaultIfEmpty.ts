import { PrintIntem } from '../../util/printItem';
import { of, empty } from "rxjs";
import { defaultIfEmpty } from 'rxjs/operators';

/*
    defaultIfEmpty
    
    Emit given value if nothing is emitted before completion

*/

// //emit 'Observable.of() Empty!' when empty, else any values from source
// const exampleOne = of().pipe(defaultIfEmpty('Observable.of() Empty!'));
// //output: 'Observable.of() Empty!'
// const subscribe = exampleOne.subscribe(PrintIntem.print);

// --------------------------------------------------------------------------------------

//emit 'Observable.empty()!' when empty, else any values from source
const example = empty().pipe(defaultIfEmpty('Observable.empty()!'));
//output: 'Observable.empty()!'
const subscribe = example.subscribe(PrintIntem.print);