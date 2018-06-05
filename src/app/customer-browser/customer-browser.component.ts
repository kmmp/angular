import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer, CustomerType } from '../model';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { CustomerService } from '../customer.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-customer-browser',
  templateUrl: './customer-browser.component.html',
  styleUrls: ['./customer-browser.component.css']
})
export class CustomerBrowserComponent implements OnInit {

  @ViewChild('details') detailsComponent: CustomerDetailsComponent; // żeby można było wykonać medotę z komponentu zagnieżdżonego

  customers: Customer[];
  customer: Customer;

  constructor(private customerService: CustomerService, private counterService: CounterService) { }

  ngOnInit() {
    this.customers = this.customerService.getCustomers();
    this.customer = null;
    this.counterService.increase();
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
