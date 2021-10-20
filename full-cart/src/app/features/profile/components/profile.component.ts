import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User';
import {USERS} from 'src/app/mock-users'
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => (this.users = users));
  }


}
