import { Injectable, Inject } from '@angular/core';
import { Customer, CustomerType, CONFIG, Config } from './model';
import { CounterService } from './counter.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customers: Customer[] = [
    {
      name: 'Jan Kowalski',
      photoUrl: 'assets/images/customer.png',
      description: 'Very important client',
      age: 27,
      address: {
        street: 'Zielona',
        houseNumber: 5,
        city: 'Warszawa'
      },
      type: CustomerType.Premium,
      categories: [
        'zagraniczny',
        'mikroprzedsiębiorstwo',
        'duży obrót'
      ]
    },
    {
      name: 'Jan Nowak',
      photoUrl: 'assets/images/customer.png',
      description: 'Dzwonić co tydzien',
      age: 57,
      address: {
        street: 'Niebieska',
        houseNumber: 23,
        city: 'RAdom'
      },
      type: CustomerType.Standard,
      categories: [
        'Polska',
        'duży obrót'
      ]
    },
    {
      name: 'Agata Czarna',
      photoUrl: 'assets/images/customer.png',
      description: 'Kluczowy klient',
      age: 24,
      address: {
        street: 'Czerwona',
        houseNumber: 123,
        city: 'Katowice'
      },
      type: CustomerType.VIP,
      categories: [
        'osoba prywatna'
      ]
    }
  ];

  constructor(private counterService: CounterService, @Inject(CONFIG) private config: Config) {
  }

  getCustomers() {
    this.counterService.increase();
    return this.customers.slice(0, this.config.customerLimit);
  }
}
