import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { LoaderService } from './shared/services/loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'empl-todo-dash';
  loaderRef: any;
  constructor(private loaderService:LoaderService, private dialog: MatDialog){}

  ngOnInit(): void {
    this.loaderService.getLoader().subscribe(count=>{
        console.log('show loader', count);
        if(count){
          this.loaderRef = this.dialog.open(LoaderComponent);
        }else{
          this.loaderRef?.close();
        }
    })
  }
}
