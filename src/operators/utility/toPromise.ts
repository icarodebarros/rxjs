import { PrintIntem } from '../../util/printItem';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

/*
    toPromise
    
    Convert observable to promise

    ⚠ toPromise is not a pipable operator, as it does not return an observable.

*/

// //return basic observable
// const sample = val => of(val).pipe(delay(3000));
// //convert basic observable to promise
// const example = sample('First Example')
//   .toPromise()
//   //output: 'First Example'
//   .then(result => {
//    PrintIntem.print('From Promise:' + result);
//   });

// --------------------------------------------------------------------------------------

//return basic observable
const sample = val => of(val).pipe(delay(3000));
/*
  convert each to promise and use Promise.all
  to wait for all to resolve
*/
const example = () => {
  return Promise.all([
    sample('Promise 1').toPromise(),
    sample('Promise 2').toPromise()
  ]);
};
//output: ["Promise 1", "Promise 2"]
example().then(val => {
    PrintIntem.print('Promise.all Result:' + val);
});