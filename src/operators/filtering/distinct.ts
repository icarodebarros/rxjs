import { PrintIntem } from '../../util/printItem';
import { of, from } from 'rxjs';
import { distinct } from 'rxjs/operators';

/*
    distinct
    
    Emits items emitted that are distinct based on any previously emitted item

*/

// of(1, 2, 3, 4, 5, 1, 2, 3, 4, 5)
//   .pipe(distinct())
//   // OUTPUT: 1,2,3,4,5
//   .subscribe(PrintIntem.print);

// --------------------------------------------------------------------------------------

const obj1 = { id: 3, name: 'name 1' };
const obj2 = { id: 4, name: 'name 2' };
const obj3 = { id: 3, name: 'name 3' };
const vals = [obj1, obj2, obj3];

from(vals)
  .pipe(distinct(e => e.id))
  .subscribe(val => PrintIntem.print(`{id: ${val.id}, name: "${val.name}"}`));

/*
OUTPUT:
{id: 3, name: "name 1"}
{id: 4, name: "name 2"}
 */

// --------------------------------------------------------------------------------------