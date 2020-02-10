import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeComponent} from './components/employee/employee.component'
import {EmployeeListComponent} from './components/employee-list/employee-list.component'

const routes: Routes = [
  
    {path:'', redirectTo:'/employee', pathMatch:'full'},
 
  {
    path:'employee', component:EmployeeComponent
  },
  {
    path:'employee-list', component:EmployeeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
