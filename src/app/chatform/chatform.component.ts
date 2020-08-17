import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat/chat.service';
@Component({
  selector: 'app-chatform',
  templateUrl: './chatform.component.html',
  styleUrls: ['./chatform.component.css']
})
export class ChatformComponent implements OnInit {
  message: string;
  constructor(private chat: ChatService) { }

  ngOnInit() {
  }

  send(): void {
    this.chat.sendMessage(this.message);
    this.message = '';
  }

  handleSubmit(event) {
    // corresponds to 'if ENTER is pressed'
    if (event.keyCode === 13) {
      this.send();
    }
  }

}
