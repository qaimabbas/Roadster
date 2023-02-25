import { Component, OnChanges, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../types/user';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit, OnChanges {
  constructor(public userService: UserService) {}
  public users: User[] = [];
  user;

  ngOnInit(): void {
    this.showUsers();
  }
  ngOnChanges(): void {
    this.showUsers();
  }
  showUsers() {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
      return this.users;
    });
  }
  createUserForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    role: new FormControl(''),
  });
  createUser() {
    this.user = this.createUserForm.value;
    this.userService.createUser(this.user).subscribe((response: any) => {
      console.log(response);
      this.users.push({
        name: response.name,
        email: response.email,
        password: response.password,
        role: response.role,
      });
    });
  }
}
