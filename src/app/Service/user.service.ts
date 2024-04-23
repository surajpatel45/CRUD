import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private addUserUrl = "https://localhost:7030/api/User/AddUser";

  constructor(private http: HttpClient) {}

  addUser(user: User): Observable<Object>{
    return this.http.post(`${this.addUserUrl}`, user);
  }

}
