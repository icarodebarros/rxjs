import { PrintIntem } from '../../util/printItem';
import { timer } from 'rxjs';
import { tap, mapTo, share } from 'rxjs/operators';

/*
    share
    
    Share source among multiple subscribers
    
    💡 share is like multicast with a Subject and refCount!

*/

//emit value in 1s
const source = timer(1000);
//log side effect, emit result
const example = source.pipe(
  tap(() => PrintIntem.print('***SIDE EFFECT***')),
  mapTo('***RESULT***')
);

/*
  ***NOT SHARED, SIDE EFFECT WILL BE EXECUTED TWICE***
  output:
  "***SIDE EFFECT***"
  "***RESULT***"
  "***SIDE EFFECT***"
  "***RESULT***"
*/
const subscribe = example.subscribe(val => PrintIntem.print(val));
const subscribeTwo = example.subscribe(val => PrintIntem.print(val));

//share observable among subscribers
const sharedExample = example.pipe(share());
/*
  ***SHARED, SIDE EFFECT EXECUTED ONCE***
  output:
  "***SIDE EFFECT***"
  "***RESULT***"
  "***RESULT***"
*/
const subscribeThree = sharedExample.subscribe(val => PrintIntem.print(val));
const subscribeFour = sharedExample.subscribe(val => PrintIntem.print(val))

// --------------------------------------------------------------------------------------