import { PrintIntem } from "../../util/printItem";
import { generate } from 'rxjs';

/*
    generate
    
    Generates an observable sequence by running a state-driven loop producing the sequence's elements,
    using the specified scheduler to send out observer messages

*/

// generate(2, x => x <= 8, x => x + 3).subscribe(PrintIntem.print);

// /*
// OUTPUT:
// 2
// 5
// 8
// */

// --------------------------------------------------------------------------------------

generate(2, x => x <= 38, x => x + 3, x => '.'.repeat(x))
    .subscribe(PrintIntem.print);
  
  /*
  OUTPUT:
  ..
  .....
  ........
  ...........
  ..............
  .................
  ....................
  .......................
  ..........................
  .............................
  ................................
  ...................................
  ......................................
  */