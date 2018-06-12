import { Component, OnInit } from '@angular/core';
import { CustomerType } from '../model';
import { CustomerService } from '../customer.service';
import { MessageService } from '../message.service';
import { viewParentEl } from '@angular/core/src/view/util';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  name: string;
  age: number;
  type: CustomerType;

  CustomerType = CustomerType;

  constructor(private customerService: CustomerService, private messageService: MessageService) { }

  ngOnInit() {
  }

  add() {
    this.customerService.createCustomer({
      name: this.name,
      age: this.age,
      type: this.type,
      photoUrl: '',
      description: '',
      categories: [],
      address: {
        city: '',
        houseNumber: 0,
        street: ''
      }
    }).subscribe(
      () => {
        this.messageService.success('Pomyślnie dodano klienta');
      },
      error => {
        console.log(error);
        this.messageService.error('Błąd dodawania');
      });
    }
  }
