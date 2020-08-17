import { Component, OnInit, Input } from '@angular/core';
import { ChatMessage } from '../models/message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() chatMessage: ChatMessage;
  userEmail: string;
  userName: string;
  messageContent: string;
  timeStamp: string;
  isOwnMessage: boolean;

  constructor() { }

  ngOnInit(chatMessage = this.chatMessage) {
    this.messageContent = chatMessage.message;
    this.userEmail = chatMessage.email;
    this.userName = chatMessage.username;
    this.timeStamp = chatMessage.timeSent;
  }

}
