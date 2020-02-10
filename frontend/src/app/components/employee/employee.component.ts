import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import {EmployeeService} from '../../services/employee.service'
import { NgForm } from '@angular/forms';

declare var M:any;

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  
  employees: Employee = {
     _id:'',
     name:'',
     position:'',
     office:'',
     salary:0

  }
  edit: boolean = false;

  employee:any = [];

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
     this.getEmployees()
  }

  getEmployees(){
    this.employeeService.getEmployee().subscribe(
      res=>{
        this.employee= res
      },
      error=>console.log(error)
    )
  }
  addEmployee() {
    this.employeeService.postEmployee(this.employees).subscribe(
      res=>{
        console.log(res)
        M.toast({html:'employee save'})
        this.getEmployees()

      },
      error=>console.log(error)
    )
   }


   removeEmployee(_id:string){
    this.employeeService.deleteEmployee(_id).subscribe(
      res=>{
        console.log(res)
        M.toast({html:"employee deleted "})
        this.getEmployees()
      },
      error=>console.log(error)
    )
   }


   editEmployee(employee){
       this.employees = employee
       this.edit = true
   }

   updateEmployee(){
    
      this.employeeService.putEmployee(this.employees._id, this.employees).subscribe(
        res=>{
           console.log(res),
           M.toast({html:"empleyee update"})
           this.getEmployees()
        },
        error=>console.log(error)
      )
   }



}
