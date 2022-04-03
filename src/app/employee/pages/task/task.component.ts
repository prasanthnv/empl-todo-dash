import { Component, OnInit } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/employee/models/task.model';
import { EmployeeService } from 'src/app/employee/services/employee/employee.service';
import { NavigationService } from 'src/app/employee/services/navigation/navigation.service';
import { NewTaskDialogComponent } from '../../components/new-task-dialog/new-task-dialog.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  tasks: Array<Task> = [];
  typesOfShoes: string[] = [
    'Boots',
    'Clogs',
    'Loafers',
    'Moccasins',
    'Sneakers',
  ];
  filter: number = -1;
  employeeID!: number;
  constructor(
    private route: ActivatedRoute,
    private navigationService: NavigationService,
    private employeeService: EmployeeService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.employeeID = this.route.snapshot.params['id'];
    this.navigationService.setPageMeta({ title: 'Employee Tasks', badge: '' });
    this.employeeService
      .getTasks(this.employeeID)
      .subscribe((tasks: Array<Task>) => {
        this.tasks = tasks;
        this.navigationService.updatePageBadge(tasks.length);
      });
  }

  toggleTask(task: Task) {
    task.completed = !task.completed;
  }

  taskFilter(change: MatButtonToggleChange) {
    console.log();
    this.filter = change.value;
  }

  getTasks() {
    // get completed tasks only from tasks
    switch (this.filter) {
      case 0:
        return this.tasks.filter((task) => !task.completed);
      case 1:
        return this.tasks.filter((task) => task.completed);
      default:
        return this.tasks;
    }
  }

  createTask(): void {
    const dialogRef = this.dialog.open(NewTaskDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      // check if result is not null
      if(result?.name){
        // create new task
        const task: Task = {
          title: result?.name,
          completed: false,
          userId: this.employeeID
      }
      this.tasks.unshift(task);
      this.navigationService.updatePageBadge(this.tasks.length);
    }
    });
  }
}
