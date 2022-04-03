import { Injectable } from '@angular/core';
import { User } from 'src/app/auth/models/user.model';

export const SESSIONNAME = 'empapp-session';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  checkLogin(user: User): boolean{
    if(user.username === 'fingent' && user.password === 'fingent'){
      localStorage.setItem(SESSIONNAME, user.username);
      return true;
    }
    return false;
  }

  logOut(): void{
    localStorage.removeItem(SESSIONNAME);
  }

  isLoggedIn(): boolean{
    if(localStorage.getItem(SESSIONNAME)){
      return true;
    }
    return false;
  }
}
