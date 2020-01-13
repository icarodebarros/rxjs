import{ PrintIntem } from '../../util/printItem';
import { take, map, combineAll } from 'rxjs/operators';
import { interval } from 'rxjs';
/*
    combineAll

    (Usa a mesma lógica do combineLatest)
    Só é emitido valor inicial após todas as fontes emitirem;
    Quando cada fonte emite, o output é a combinação dessa emissão junto das ultimas emissões das outras fontes
*/

// emit every 1s, take 2
const source$ = interval(1000).pipe(take(2));
// map each emitted value from source to interval observable that takes 5 values
const example$ = source$.pipe(
  map(val =>
    interval(1000).pipe(
      map(i => `Result (${val}): ${i}`),
      take(5)
    )
  )
);
/*
  2 values from source will map to 2 (inner) interval observables that emit every 1s.
  combineAll uses combineLatest strategy, emitting the last value from each
  whenever either observable emits a value
*/
example$
  .pipe(combineAll())
  /*
  output:
  ["Result (0): 0",                ] // Essa linha não existe pois a segunda fonte ainda não emitiu.
  ["Result (0): 0", "Result (1): 0"] // Primeiro output: [repetição fonte1, fonte2]
                                     // +1 segundo
  ["Result (0): 1", "Result (1): 0"] // Segundo output: [fonte1, repetição fonte2]
  ["Result (0): 1", "Result (1): 1"] // Segundo output: [repetição fonte1, fonte2]

  ["Result (0): 2", "Result (1): 1"] // ...
  ["Result (0): 2", "Result (1): 2"]

  ["Result (0): 3", "Result (1): 2"]
  ["Result (0): 3", "Result (1): 3"]

  ["Result (0): 4", "Result (1): 3"]
  ["Result (0): 4", "Result (1): 4"]
*/
  .subscribe(PrintIntem.print);
