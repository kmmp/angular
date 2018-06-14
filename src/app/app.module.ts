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

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { ErrorHandlingInterceptor } from './error-handling.interceptor';

const config: Config = {
  customerLimit: 10,
  apiUrl: 'http://localhost:13378'
};

@NgModule({
  declarations: [
    AppComponent,
    HighliteDirective,
    CustomerBrowserComponent,
    CustomerDetailsComponent,
    CustomerAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    CustomerService,
    CounterService,
    {provide: CONFIG, useValue: config},
    MessageService,
    {provide: HTTP_INTERCEPTORS, useClass: ErrorHandlingInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
