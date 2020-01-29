import { PrintIntem } from "../../util/printItem";
import { of, zip, interval, fromEvent } from 'rxjs';
import { delay, take, map } from 'rxjs/operators';

/*
    zip
    
    After all observables emit, emit values as an array
    (Quando todas as fontes emitem, pega-se o primeiro valor de cada fonte num array, se todas emitirem mais
    valores, pega-se um segundo array com os segundo valor de cada, e etc. Não precisa que os observables completem.)

    💡 Combined with interval or timer, zip can be used to time output from another source!
*/

// const sourceOne = of('Hello');
// const sourceTwo = of('World!');
// const sourceThree = of('Goodbye');
// const sourceFour = of('World!');
// //wait until all observables have emitted a value then emit all as an array
// const example = zip
// (
//   sourceOne,
//   sourceTwo.pipe(delay(1000)),
//   sourceThree.pipe(delay(2000)),
//   sourceFour.pipe(delay(3000))
// );
// //output: ["Hello", "World!", "Goodbye", "World!"]
// const subscribe = example.subscribe(PrintIntem.print);

// --------------------------------------------------------------------------------------

// //emit every 1s
// const source = interval(1000);
// //when one observable completes no more values will be emitted
// const example = zip(source, source.pipe(take(2)));
// //output: [0,0]...[1,1]
// const subscribe = example.subscribe(PrintIntem.print);

// --------------------------------------------------------------------------------------

// const documentEvent = eventName =>
//   fromEvent(document, eventName).pipe(
//     map((e: MouseEvent) => ({ x: e.clientX, y: e.clientY }))
//   );

// zip(documentEvent('mousedown'), documentEvent('mouseup'))
//     .subscribe(e => PrintIntem.print(JSON.stringify(e)));

// --------------------------------------------------------------------------------------

const eventTime = eventName =>
  fromEvent(document, eventName).pipe(map(() => new Date()));

const mouseClickDuration = zip(
  eventTime('mousedown'),
  eventTime('mouseup')
).pipe(map(([start, end]) => Math.abs(start.getTime() - end.getTime())));

mouseClickDuration.subscribe(PrintIntem.print);