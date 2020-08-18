import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { ChatService } from '../services/chat/chat.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {
  users: User[];

  constructor(chat: ChatService) {
    chat.getUsers().subscribe(users => {
      console.log(users)
      this.users = users;
    });
  }
}