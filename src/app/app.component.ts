import { Component } from '@angular/core';
import { Customer } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  customer: Customer = {
    name: 'Marcin Popiel',
    photoUrl: 'assets/images/customer.png',
    description: 'Very important client',
    age: 27,
    address: {
      street: 'Prusa',
      houseNumber: 12,
      city: 'Pruszków'
    }
  };

  nameColor = 'blue';
  isActive = true;

  constructor() {
  }

  changeColor() {
    this.nameColor =  this.nameColor === 'blue' ? 'red' : 'blue';
  }
}
