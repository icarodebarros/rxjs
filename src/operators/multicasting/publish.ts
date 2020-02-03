import { PrintIntem } from '../../util/printItem';
import { interval, Observable } from "rxjs";
import { tap, publish } from 'rxjs/operators';

/*
    publish
    
    Share source and make hot by calling connect
*/

//emit value every 1 second
const source = interval(1000);
const example: any = source.pipe(
  //side effects will be executed once
  tap(_ => PrintIntem.print('Do Something!')),
  //do nothing until connect() is called
  publish()
);

/*
  source will not emit values until connect() is called
  output: (after 5s)
  "Do Something!"
  "Subscriber One: 0"
  "Subscriber Two: 0"
  "Do Something!"
  "Subscriber One: 1"
  "Subscriber Two: 1"
*/
const subscribe = example.subscribe(val =>
  PrintIntem.print(`Subscriber One: ${val}`)
);
const subscribeTwo = example.subscribe(val =>
  PrintIntem.print(`Subscriber Two: ${val}`)
);

//call connect after 5 seconds, causing source to begin emitting items
setTimeout(() => {
  example.connect();
}, 5000);

// --------------------------------------------------------------------------------------