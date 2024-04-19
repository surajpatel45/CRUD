import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn: boolean = false;

  constructor( private router: Router) { }

  setLoggedIn(value: boolean): void {
    sessionStorage.setItem('isLoggedIn', value ? 'true' : 'false');
  }

  isLoggedIn(): boolean {
    return sessionStorage.getItem('isLoggedIn') === 'true';
  }

  logout(): void {
    sessionStorage.removeItem('isLoggedIn');
  }
  
}
