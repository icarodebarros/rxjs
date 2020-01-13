import { Observable, Subject, from, merge, interval, timer } from 'rxjs'; // Static Operators
import { map, pluck, skipUntil, take } from 'rxjs/operators'; // Instance Operators
/*
    OPERADORES
        São métodos usados nos Observables/Subjects que te permitem mudar o observable original de alguma
        forma e retornar um novo observable. Esses operadores não mudam o observable existente, apenas
        modificando e retornando um novo. Operadores são funções que não modificam as variáveis fora de 
        seu escopo.
*/

// const observable: Observable<string> = new Observable((subscriber: any) => {
//     subscriber.next('Hey guys!');
// });
// const observable2: Observable<string> = new Observable((subscriber: any) => {
//     subscriber.next('How is it goin?');
// });
// const newObs = merge(observable, observable2);
// newObs.subscribe((x: string) => addItem(x));
// -------------------------------------------------------------------
// //emit (1,2,3,4,5)
// const source = from([1, 2, 3, 4, 5]);
// //add 10 to each value
// const example = source.pipe(map(val => val + 10));
// //output: 11,12,13,14,15
// example.subscribe(val => addItem(val));
// -------------------------------------------------------------------
// //emit (0) OR (0,1,2,3...)
// const source = timer(1000); // (1000, 2000)
// //add 10 to each value
// const example = source.pipe(map(val => val + 10));
// //output: 10 OR 10,11,12,13...
// example.subscribe(val => addItem(val));
// -------------------------------------------------------------------
// const source = from([
//     {nome: 'Uguinho', idade: 8},
//     {nome: 'Zezinho', idade: 8},
//     {nome: 'Luizinho', idade: 8},
// ]);
// const example = source.pipe(pluck('nome'));
// example.subscribe(val => addItem(val));
// -------------------------------------------------------------------
const observable: Observable<string> = new Observable((subscriber: any) => {
    let i = 1;
    setInterval(() => subscriber.next(i++), 1000);
});
const observable2 = new Subject;
setTimeout(() => {
    observable2.next('Hey!');
}, 3000);

const newObs = observable.pipe(
        skipUntil(observable2),
        take(8)
    );
newObs.subscribe((x: string) => addItem(x));




// Print the data on a html table
function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}