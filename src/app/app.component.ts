import { Component } from '@angular/core';
import { Customer, CustomerType } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
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

  customer: Customer = null;

  nameColor = 'blue';
  isActive = true;
  showPhoto = false;

  CustomerType = CustomerType;

  constructor() {
    /* setTimeout(() => {
      this.customer.categories.push('branża budowlana');
    }, 3000); */
  }

  changeColor() {
    this.nameColor = this.nameColor === 'blue' ? 'red' : 'blue';
  }
}
