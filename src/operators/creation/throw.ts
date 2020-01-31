import { PrintIntem } from "../../util/printItem";
import { throwError, of } from 'rxjs';

/*
    throw
    
    Emit error on subscription    

*/

//emits an error with specified value on subscription
const source = throwError('This is an error!');
// const source = of('This is an error!');

//output: 'Error: This is an error!'
const subscribe = source.subscribe({
  next: val => PrintIntem.print(val),
  complete: () => PrintIntem.print('Complete!'),
  error: val => PrintIntem.print(`Error: ${val}`)
});

// --------------------------------------------------------------------------------------