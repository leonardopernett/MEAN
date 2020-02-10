import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';

import {EmployeeService} from './services/employee.service'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    NavigationComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
