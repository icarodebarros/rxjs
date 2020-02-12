import { PrintIntem } from '../../util/printItem';
import { from } from 'rxjs';
import { pluck } from 'rxjs/operators';

/*
    pluck
    
    Select property to emit

*/

const source = from([
    { name: 'Joe', age: 30 },
    { name: 'Sarah', age: 35 }
  ]);
  //grab names
  const example = source.pipe(pluck('name'));
  //output: "Joe", "Sarah"
  const subscribe = example.subscribe(PrintIntem.print);

// --------------------------------------------------------------------------------------

// const source = from([
//     { name: 'Joe', age: 30, job: { title: 'Developer', language: 'JavaScript' } },
//     //will return undefined when no job is found
//     { name: 'Sarah', age: 35 }
//   ]);
//   //grab title property under job
//   const example = source.pipe(pluck('job', 'title'));
//   //output: "Developer" , undefined
//   const subscribe = example.subscribe(PrintIntem.print);