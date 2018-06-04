import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { Customer, CustomerType } from '../model';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit, OnDestroy, OnChanges {

  @Input() customer: Customer;
  @Output() shift = new EventEmitter<string>();

  nameColor = 'blue';
  isActive = true;
  showPhoto = false;
  counter = 0;
  counterHandler: number;

  CustomerType = CustomerType;

  constructor() { }

  ngOnInit() {
    console.log('init');
    // this.counterHandler = setInterval(
    //   () => {
    //     this.counter++;
    //     console.log('counter++');
    //   },
    //   1000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.customer.firstChange) {
      console.log(`change from ${changes.customer.previousValue.name} to ${changes.customer.currentValue.name}`);
    }
  }

  ngOnDestroy() {
    console.log('destroy');
    // clearInterval(this.counterHandler);
  }

  changeColor() {
    this.nameColor = this.nameColor === 'blue' ? 'red' : 'blue';
  }

  left() {
    this.shift.emit('left');
  }

  right() {
    this.shift.emit('right');
  }
}
