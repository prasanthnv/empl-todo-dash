import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee/employee.service';
import { NavigationService } from '../../services/navigation/navigation.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  employees: Array<Employee> = [];
  constructor(private navigationService: NavigationService, private employeeService: EmployeeService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Setting page name
    this.navigationService.setPageMeta({ title: 'Employees', badge: '' });

    // fetching employees
    this.employeeService.getEmployees().subscribe((employees: Array<Employee>) => {
      this.employees = employees;
      this.navigationService.updatePageBadge(employees.length)
    });
  }

  employeeSelected(employee: Employee) { 
    console.log(employee);
    this.router.navigate([ '../'+ employee.id, 'tasks'], {relativeTo:this.route});  
  }
}
