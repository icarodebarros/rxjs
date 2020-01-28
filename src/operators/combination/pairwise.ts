import { PrintIntem } from '../../util/printItem';
import { interval } from 'rxjs';
import { pairwise, take } from 'rxjs/operators';

/*
    pairwise
    
    Emit the previous and current values as an array
    
*/

//Returns: [0,1], [1,2], [2,3], [3,4], [4,5]
interval(1000)
  .pipe(
    pairwise(),
    take(5)
  )
  .subscribe(PrintIntem.print);

// --------------------------------------------------------------------------------------
