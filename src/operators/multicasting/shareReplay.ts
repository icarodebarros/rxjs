import { PrintIntem } from '../../util/printItem';
import { Subject, ReplaySubject } from 'rxjs';
import { pluck, share, tap, shareReplay } from 'rxjs/operators';

/*
    shareReplay
    
    Share source and replay specified number of emissions on subscription
    
    💡 share is like multicast with a Subject and refCount!

*/


    // For instance, suppose you have an observable that emits the last visited url.
    // In the first example we are going to use share

// // simulate url change with subject
// const routeEnd = new Subject<{data: any, url: string}>();

// // grab url and share with subscribers
// const lastUrl = routeEnd.pipe(
//   pluck('url'),
//   share()
// );

// // initial subscriber required
// const initialSubscriber = lastUrl.subscribe(PrintIntem.print);

// // simulate route change
// routeEnd.next({data: {}, url: 'my-path'});

// // nothing logged
// const lateSubscriber = lastUrl.subscribe(PrintIntem.print);

// --------------------------------------------------------------------------------------

    // In the above example nothing is logged as the lateSubscriber subscribes to the source.
    // Now suppose instead we wanted to give access to the last emitted value on subscription,
    // we can accomplish this with shareReplay:

// simulate url change with subject
const routeEnd = new Subject<{data: any, url: string}>();

// grab url and share with subscribers
const lastUrl = routeEnd.pipe(
  tap(_ => PrintIntem.print('executed')),
  pluck('url'),
  // defaults to all values so we set it to just keep and replay last one
  shareReplay(1)
);

// requires initial subscription
const initialSubscriber = lastUrl.subscribe(PrintIntem.print);

// simulate route change
// logged: 'executed', 'my-path'
routeEnd.next({data: {}, url: 'my-path'});

// logged: 'my-path'
const lateSubscriber = lastUrl.subscribe(PrintIntem.print);

// --------------------------------------------------------------------------------------

    // Note that this is similar behavior to what you would see if you subscribed a ReplaySubject
    // to the lastUrl stream, then subscribed to that Subject:

// // simulate url change with subject
// const routeEnd = new Subject<{data: any, url: string}>();

// // instead of using shareReplay, use ReplaySubject
// const shareWithReplay = new ReplaySubject();

// // grab url and share with subscribers
// const lastUrl = routeEnd.pipe(
//   pluck('url')
// )
// .subscribe(val => shareWithReplay.next(val));

// // // requires initial subscription
// const initialSubscriber = shareWithReplay.subscribe(PrintIntem.print);

// // simulate route change
// routeEnd.next({data: {}, url: 'my-path'});

// // subscribe to ReplaySubject instead
// // logged: 'my path'
// shareWithReplay.subscribe(PrintIntem.print);
