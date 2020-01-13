import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';

/* SUBJECT:
    - Cada subscription vai receber apenas os valores emitidos após esse subscription, nenhum anterior;
*/
const subject = new Subject();

/* Primeira variação de Subject: "BehaviorSubject"
    - Aqui cada subscription recebe o último valor emitido antes dele, além dos valores seguintes.
    E no caso da primeira 'inscrição' o último valor emitido é o que está no construtor.
 */
// const subject = new BehaviorSubject('Constructor value');

/* Segunda variação de Subject: "ReplaySubject"
    - Aqui cada subscription recebe os últimos X valores emitidos antes dele, onde X é passado no construtor.
    E no caso da primeira 'inscrição' do código abaixo não há nada emitido antes dela;
    - O segundo parâmetro do construtor é a janela de tempo 'Y milissegundos', que quando setada faz o subject
    capturar os últimos valores emitidos nesse tempo.
 */
// const subject = new ReplaySubject(2);
// const subject = new ReplaySubject(30, 200); // Aqui o subject captura o menor valor entre '30 valores' ou
// 'todos os valores dos ultimos 200 ms'

/* Terceira variação do Subject: "AsyncSubject"
    - Uma vez que o método complete() é chamado, todas as 'inscrições' ao subject recebem o ultimo valor
    emitido por ele. Sem o comprete() nenhuma incrição recebe nada.
 */
// const subject = new AsyncSubject();

subject
    .subscribe({
        next: (data: any) => addItem('Observer 1: '+data),
        error: (error: any) => addItem(error),
        // complete: () => addItem('Observer 1 completed')
    });

// let i = 1;
// setInterval(() => subject.next(i++), 100);

// setTimeout(() => {
//     subject.subscribe({next: (data: any) => addItem('Observer 2: '+data)});
//     subject.complete(); // Necessário para o 'AsyncSubject' funcionar
// }, 500);

subject.next('The #1 thing has been sent');
subject.next('The #2 thing has been sent');
subject.next('The #3 thing has been sent');

const subscription2 = subject
    .subscribe({
        next: (data: any) => addItem('Observer 2: '+data)
    });

subject.next('The #4 thing has been sent');
subject.next('A #5 thing has been sent');

subscription2.unsubscribe();

subject.next('A final thing has been sent');



// Print the data on a html table
function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}