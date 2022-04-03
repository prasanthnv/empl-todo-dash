import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../../models/employee.model';
import { Task } from '../../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Array<Employee>> {
    return this.http.get<Array<Employee>>(`${environment.baseUrl}/users`);
  }

  getTasks(id: number): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(`${environment.baseUrl}/users/${id}/todos`);
  }
}
