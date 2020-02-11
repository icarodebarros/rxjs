import { PrintIntem } from '../../util/printItem';
import { from, zip, of } from 'rxjs';
import { groupBy, toArray, mergeMap } from 'rxjs/operators';

/*
    groupBy
    
    Group into observables based on provided value

*/

// const people = [
//     { name: 'Sue', age: 25 },
//     { name: 'Joe', age: 30 },
//     { name: 'Frank', age: 25 },
//     { name: 'Sarah', age: 35 }
//   ];
//   //emit each person
//   const source = from(people);
//   //group by age
//   const example = source.pipe(
//     groupBy(person => person.age),
//     // return each item in group as array
//     mergeMap(group => group.pipe(toArray()))
//   );
//   /*
//     output:
//     [{age: 25, name: "Sue"},{age: 25, name: "Frank"}]
//     [{age: 30, name: "Joe"}]
//     [{age: 35, name: "Sarah"}]
//   */
//   const subscribe = example.subscribe((val: any[]) => {
//       let result = '[';
//       for(let x of val) {
//           if (result.length > 1) result += ',';
//           result += `{age: ${x.age}, name: ${x.name}}`;
//       }
//       result += ']';
//       PrintIntem.print(result)
//     });

// --------------------------------------------------------------------------------------

const people = [
    { name: 'Sue', age: 25 },
    { name: 'Joe', age: 30 },
    { name: 'Frank', age: 25 },
    { name: 'Sarah', age: 35 }
  ];
  
  from(people)
    .pipe(
      groupBy(person => person.age, p => p.name),
      mergeMap(group => zip(of(group.key), group.pipe(toArray())))
    )
    .subscribe(PrintIntem.print);
  
  /*
    output:
    [25, ["Sue", "Frank"]]
    [30, ["Joe"]]
    [35, ["Sarah"]]
  */