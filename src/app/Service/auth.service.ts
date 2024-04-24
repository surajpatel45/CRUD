import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'https://localhost:7030/api/User/Login';

  constructor( private router: Router, private http:HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}?email=${email}&password=${password}`,null)
    .pipe(
      catchError(error => {
        console.error('Error during login:', error);
        return throwError('Invalid Email or Password');
      })
    );
  }

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
