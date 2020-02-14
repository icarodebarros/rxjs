import { PrintIntem } from '../../util/printItem';
import { from, Notification } from 'rxjs';
import { dematerialize } from 'rxjs/operators';

/*
    dematerialize
    
    Turn notification objects into notification values

*/

//emit next and error notifications
const source = from([
  Notification.createNext('SUCCESS!'),
  Notification.createError('ERROR!')
]).pipe(
  //turn notification objects into notification values
  dematerialize()
);

//output: 'NEXT VALUE: SUCCESS' 'ERROR VALUE: 'ERROR!'
const subscription = source.subscribe({
  next: val => PrintIntem.print(`NEXT VALUE: ${val}`),
  error: val => PrintIntem.print(`ERROR VALUE: ${val}`)
});

// --------------------------------------------------------------------------------------