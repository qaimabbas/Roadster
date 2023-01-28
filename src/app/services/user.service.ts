import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(public http: HttpClient) {}

  // get users
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8000/users');
  }
  createUser(User: User[]): Observable<User[]> {
    return this.http.post<User[]>('http://localhost:8000/', User);
  }
}
