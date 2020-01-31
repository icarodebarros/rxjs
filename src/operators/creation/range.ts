import { PrintIntem } from "../../util/printItem";
import { range } from 'rxjs';

/*
    range
    
    Emit numbers in provided range in sequence
    

*/

//emit 1-10 in sequence
const source = range(1, 10);
//output: 1,2,3,4,5,6,7,8,9,10
const subscribe = source.subscribe(PrintIntem.print);

// --------------------------------------------------------------------------------------