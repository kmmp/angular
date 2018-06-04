import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer, CustomerType } from '../model';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';

@Component({
  selector: 'app-customer-browser',
  templateUrl: './customer-browser.component.html',
  styleUrls: ['./customer-browser.component.css']
})
export class CustomerBrowserComponent implements OnInit {

  @ViewChild('details') detailsComponent: CustomerDetailsComponent;
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

  constructor() { }

  ngOnInit() {
  }

  onShift(direction: string) {
    const idx = this.customers.lastIndexOf(this.customer);
    if (direction === 'left' && idx > 0) {
      this.customer = this.customers[idx - 1];
    } else if (direction === 'right' && idx < this.customers.length - 1) {
      this.customer = this.customers[idx + 1];
    }
  }

  onColorChange() {
    this.detailsComponent.changeColor();
  }
}
