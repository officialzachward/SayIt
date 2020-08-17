import { Component, OnInit, OnChanges } from '@angular/core';
import { ChatService } from '../services/chat/chat.service';
import { Observable } from 'rxjs';
import { ChatMessage } from '../models/message.model';
import { AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-messagefeed',
  templateUrl: './messagefeed.component.html',
  styleUrls: ['./messagefeed.component.css']
})
export class MessagefeedComponent implements OnInit, OnChanges {
  feed: Observable<ChatMessage[]>;
  constructor(private chat: ChatService) { }

  ngOnInit() {
    this.feed = this.chat.getMessages();
  }

  ngOnChanges() {
    this.feed = this.chat.getMessages();
  }
}
