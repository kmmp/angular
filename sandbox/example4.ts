// import { Customer, Person, persons, welcome } from './customer';
import * as fromCustomer from './customer';
import { Observable} from 'rxjs';

const adam = new fromCustomer.Customer('Adam', 55, 'Agnieszka');
console.log(adam.welcome());

// Observable.(5);

console.log(persons);

