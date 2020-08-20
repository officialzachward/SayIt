
import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../services/chat/chat.service';
import { User } from '../models/user.model';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user;
  constructor() { }

  ngOnInit() {
  }

}
