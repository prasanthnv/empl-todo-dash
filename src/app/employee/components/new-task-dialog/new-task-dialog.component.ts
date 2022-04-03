import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-task-dialog',
  templateUrl: './new-task-dialog.component.html',
  styleUrls: ['./new-task-dialog.component.scss']
})
export class NewTaskDialogComponent implements OnInit {
  constructor( public dialogRef: MatDialogRef<NewTaskDialogComponent>) { }

  ngOnInit(): void {
  }

  saveTask(form:NgForm): void{
    if(form.valid){
    }
    this.dialogRef.close({name: form.value.name})
  }

  closeDialog(): void{
    this.dialogRef.close();
  }




}
