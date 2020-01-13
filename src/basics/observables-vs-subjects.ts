import { Observable, Subject } from 'rxjs';

// OBSERVABLES
const observable = new Observable<string>(observer => { // observer agora é chamado de 'subscriber'
    setTimeout(() => observer.next('hello from Observable!'), 1000);
  });
  
  observable.subscribe(v => addItem(v));
/*
    Notice in our example the observer object is scoped to the constructor. We cannot access the observer and
    call .next() outside of the internal implementation of the Observable. This scoping ensures only the
    Observable knows how and when the events should be emitted for subscribers of our Observables.

    Observables by default are “Cold” meaning they are lazy and won’t run any code until there is a subscriber.
    Observables also by default do not share their work between subscribers. For example, our use case if I
    subscribe three times, I will have three setTimeouts created. 
*/
// ----------------------------------------------------------------------------

// SUBJECTS
const subject = new Subject();

subject.next('missed message from Subject');

subject.subscribe(v => addItem(v));

subject.next('hello from subject!');

/*
    The subject is another Observable type in RxJS. Subjects like Observables can emit multiple event values.
    However, Subjects allow subscribers of the Subject to push back or trigger their own events on the Subject.

    We instantiate the Subject class. With the Subject instance, we can immediately trigger events outside of
    the constructor by calling next(). Now anyone can listen or trigger events on the Subject. Notice how we
    call next and emit ‘missed message from Subject’ before we have subscribed to the Subject? Subjects, unlike
    regular Observables, are what we would call “Hot”. A hot Observable is an Observable that can start emitting
    events before you subscribe. This means you can miss previous events that have already emitted.

    Subjects, unlike Observables, share their work with all subscribers. Unlike our first Observable that
    created a setTimeout for each subscriber, this Subject would share that work with all subscribers.
*/
// ----------------------------------------------------------------------------

// OBSERVABLES vs SUBJECTS
/*
In stream programming there are two main interfaces: Observable and Observer.
Observable is for the consumer, it can be transformed and subscribed:
    observable.map(x => ...).filter(x => ...).subscribe(x => ...);

Observer is the interface which is used to feed an observable source:
    observer.next(newItem);

We can create new Observable with an Observer:
    var observable = Observable.create(observer => { 
        observer.next('first'); 
        observer.next('second'); 
        ... 
    });
    observable.map(x => ...).filter(x => ...).subscribe(x => ...)

Or, we can use a Subject which implements both the Observable and the Observer interfaces:
    var source = new Subject();
    source.map(x => ...).filter(x => ...).subscribe(x => ...)
    source.next('first')
    source.next('second')
*/

// ----------------------------------------------------------------------------
// Print the data on a html table
function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}