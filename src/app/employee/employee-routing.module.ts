import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './pages/task/task.component';
import { EmployeeComponent } from './employee.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: EmployeeComponent, children:[
    {path: 'dashboard', component: DashboardComponent},
    {path: ':id/tasks', component: TaskComponent},
    {path:'', redirectTo: 'dashboard', pathMatch: 'full'}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
