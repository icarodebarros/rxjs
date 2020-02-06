import { PrintIntem } from '../../util/printItem';
import { fromEvent } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

/*
    debounceTime
    
    Discard emitted values that take less than the specified time between output

    💡 This operator is popular in scenarios such as type-ahead where the rate of user input must be controlled!

    OBS.: DEBOUNCETIME VS AUDITTIME
        - Dado um click único, ambos só irão mostrar ao fim dos 1000ms
        - Dado uma sequência de clicks rápidos, o auditTime a cada 1s mostra a mensagem de click, já o
        debounceTime irá mostrar apenas quando os clicks 'pararem', um segundo depois! Ou seja, no auditTime
        ignora as requisições pelo dado período de tempo, emite a mais recente, depois volta a ignorar; já
        o debounceTime reseta a contagem do tempo a cada evento, assim só irá mostrar cliques que ocorram
        mais de 1s do anterior.
        - Em outras palavras: o audit time conta o tempo entre as 'saídas' que ele liberou, já o debounceTime
        conta o tempo entre os eventos de entrada!
*/

// streams
const click$ = fromEvent(document, 'click');

// wait .5s between clicks to emit current value
click$
  .pipe(
    map((i: MouseEvent) => i.timeStamp),
    debounceTime(1000)
  )
  .subscribe(PrintIntem.print);

// --------------------------------------------------------------------------------------
