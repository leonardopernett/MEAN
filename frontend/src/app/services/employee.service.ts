import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Employee} from '../models/employee'
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  SelectedEmployee:Employee;
 readonly URI ='http://localhost:3000/api/employees';

  constructor(private http: HttpClient) { }

    getEmployee(){
     return  this.http.get(this.URI);
    }

    postEmployee(employee:Employee){
      return  this.http.post(this.URI,employee);
    }

    putEmployee(_id:string ,employee:Employee, ){
      return  this.http.put('http://localhost:3000/api/employees/'+_id ,employee);
    }

    deleteEmployee(_id:string){
      return  this.http.delete(this.URI+`/${_id}`);

    }
}
