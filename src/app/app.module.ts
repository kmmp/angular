import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HighliteDirective } from './highlite.directive';
import { CustomerBrowserComponent } from './customer-browser/customer-browser.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerService } from './customer.service';
import { CounterService } from './counter.service';
import { Config } from 'protractor';
import { CONFIG } from './model';

import { ToastrModule} from 'ngx-toastr';
import { MessageService } from './message.service';

const config: Config = {
  customerLimit: 10
};

@NgModule({
  declarations: [
    AppComponent,
    HighliteDirective,
    CustomerBrowserComponent,
    CustomerDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    CustomerService,
    CounterService,
    {provide: CONFIG, useValue: config},
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
