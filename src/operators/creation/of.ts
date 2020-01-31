import { PrintIntem } from "../../util/printItem";
import { of } from 'rxjs';

/*
    of
    
    Emit variable amount of values in a sequence and then emits a complete notification
    
    OBS.: OF vc FROM
        - ambos emitem a notificação 'complete' ao terminarem
        - of aceita um conjunto de elementos, from aceita apenas um (pode ser um array de elementos)
        - of emite exatamente o que foi passado pra ele, from transforma em Obsevable.
            Ex.: Promisse -> of emite a promisse, from emite observable com o valor da promisse resolvida;
                 Array -> of faz uma única emissão do array inteiro, from emite os elementos separados;

*/

//emits any number of provided values in sequence
const source = of(1, 2, 3, 4, 5);
//output: 1,2,3,4,5
const subscribe = source.subscribe(PrintIntem.print);

// --------------------------------------------------------------------------------------

// //emits values of any type
// const source = of({ name: 'Brian' }, [1, 2, 3], function hello() {
//     return 'Hello';
//   });
//   //output: {name: 'Brian'}, [1,2,3], function hello() { return 'Hello' }
//   const subscribe = source.subscribe(PrintIntem.print);

// --------------------------------------------------------------------------------------

// Se for passado uma promisse, vc recebe uma promisse! Não transforma em Observable como o 'from'
// const source = of(new Promise(resolve => resolve('Hello World!')));
// const subscribe = source.subscribe((p) => p.then(PrintIntem.print));