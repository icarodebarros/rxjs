import { PrintIntem } from "../../util/printItem";
import { Observable } from 'rxjs';

/*
    create
    
    Create a cold observable with given subscription function

*/

// /*
//   Create an observable that emits 'Hello' and 'World' on  
//   subscription.
// */
// const hello = Observable.create(function(observer) {
//     observer.next('Hello');
//     observer.next('World');
//     observer.complete();
//   });
  
//   //output: 'Hello'...'World'
//   const subscribe = hello.subscribe(PrintIntem.print);

// --------------------------------------------------------------------------------------

/*
  Increment value every 1s, emit even numbers.
*/
const evenNumbers = Observable.create(function(observer) {
    let value = 0;
    const interval = setInterval(() => {
      if (value % 2 === 0) {
        observer.next(value);
      }
      value++;
    }, 1000);
  
    return () => clearInterval(interval);
  });
  //output: 0...2...4...6...8
  const subscribe = evenNumbers.subscribe(PrintIntem.print);
  //unsubscribe after 10 seconds
  setTimeout(() => {
    subscribe.unsubscribe();
  }, 10000);