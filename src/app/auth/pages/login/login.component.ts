import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginError!: boolean;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  clearForm(form: NgForm): void {
    this.loginError = false;
    form.reset();
  }

  login(form: NgForm): void {
    if(form.valid){
      const user: User = {
        username: form.value.username,
        password: form.value.password
      };

      if(this.authService.checkLogin(user)){
       this.router.navigate(['/employee']);
      }else{
        this.loginError = true;
      }
      
    }
  }

}
