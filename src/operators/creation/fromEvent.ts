import { PrintIntem } from "../../util/printItem";
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

/*
    fromEvent
    
    Turn event into observable sequence

*/

//create observable that emits click events
const source = fromEvent(document, 'click');
//map to string with given event timestamp
const example = source.pipe(map(event => `Event time: ${event.timeStamp}`));
//output (example): 'Event time: 7276.390000000001'
const subscribe = example.subscribe(val => PrintIntem.print(val));

// --------------------------------------------------------------------------------------