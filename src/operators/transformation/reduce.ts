import { PrintIntem } from '../../util/printItem';
import { of } from 'rxjs';
import { reduce } from 'rxjs/operators';

/*
    reduce
    
    Reduces the values from source observable to a single value that's emitted when the source completes.
    OBS.: reduce<number>(accumulator: (acc: number, value: number, index: number))
    A saída do REDUCE é apenas de 1 elemento!
    A saída do SCAN é igual ao número de emissões da fonte de entrada!

    💡 Just like Array.prototype.reduce()
    💡 If you need the current accumulated value on each emission, try scan!

*/

const source = of(1, 2, 3, 4);
const example = source.pipe(reduce((acc, val) => acc + val));
//output: Sum: 10'
const subscribe = example.subscribe(val => PrintIntem.print('Sum:' + val));

// --------------------------------------------------------------------------------------