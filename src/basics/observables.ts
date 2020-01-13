import { Observable, fromEvent, Subscriber } from 'rxjs';
import { share } from 'rxjs/operators'

// const observable: Observable<string> = Observable.create((observer: any) => {...}); // Deprecated!

const observable: Observable<string> = new Observable<string>((subscriber: Subscriber<string>) => {
    try {
        subscriber.next('Hey guys!'); // 'side effect' de cold obsevable
        subscriber.next('How are you?'); // 'side effect' de cold obsevable
        setInterval(() => {
            subscriber.next('I am good')
        }, 2000);
        // observer.complete();
        // observer.next('This will not send.');
    } catch(err) {
        subscriber.error(err);
    }
}).pipe(share()); /* O operador 'share' faz com que os multiplos subscribers não executem os 'side effects'
multiplas vezes. Exemplo de side efect.:
    //emit value in 1s
    const source = timer(1000);
    //log side effect, emit result
    const example = source.pipe(
        tap(() => console.log('***SIDE EFFECT***')), // <<<<<<<<< Side effect de um HOT Observable
        mapTo('***RESULT***')
    );
*/

const subscription1 = observable
    .subscribe({
        next: (result: string) => addItem(result),
        error: (error: any) => addItem(error),
        complete: () => addItem('Completed')
    });

// const subscription2 = observable
//     .subscribe(
//         (result: string) => addItem(result)
//     );

// subscription1.add(subscription2); // Adiciona 'subscription2' como child de 'subscription1' fazendo com que
//                                   // o ato de unsubscribe sub1 também afeta a sub2
// // subscription1.remove(subscription2); // Inverso do '.add'

// setTimeout(() => {
//     subscription1.unsubscribe();
// }, 6001);

setTimeout(() => {
        observable
            .subscribe((result: string) => addItem('Subscriber2: ' + result));
}, 1000);

/* ---------------- NOTAS: ---------------------

"COLD OBSERVABLE": é quando os dados são produzidos dentro do próprio observable (Como no exemplo acima);

"HOT OBSERVABLE": quando os dados são produzidos fora do observable, ou seja, os dados são gerados
independente de existir subscribes! Caso não exista subscribe os dados são simplesmente perdidos.
    EX.: const observable = fromEvent(document, 'click'); // Cria um observable a partir do evento click

------------------------------------------------*/
// const observableFromEvent = fromEvent(document, 'mousemove');

// setTimeout(() => {
//     observableFromEvent
//         .subscribe((x:any) => addItem(x));
// }, 2000);




// Print the data on a html table
function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}