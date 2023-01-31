import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomerDetailsComponent } from './customer-list/customer-details/customer-details.component';

@NgModule({
  declarations: [		
    AppComponent,
      CustomerListComponent,
      CustomerDetailsComponent
   ],
  imports: [
    CommonModule, BrowserModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
