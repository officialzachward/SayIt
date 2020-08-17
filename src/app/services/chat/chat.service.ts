import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import * as firebase from 'firebase/app';

import { ChatMessage } from '../../models/message.model';
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  user: any;
  chatMessages: Observable<ChatMessage[]>;
  chatMessage: ChatMessage;
  // userName: Observable<string>;
  constructor(private db: AngularFireDatabase,
              private afAuth: AngularFireAuth) { 
                // this.afAuth.authState.subscribe(auth => {
                //   if(auth !== undefined && auth !== null) {
                //     this.user = auth;
                //   }
                // })
              }

  sendMessage(msg: string): void {
    const timestamp = this.getTimeStamp();
    // const email = this.user.email;
    const email = 'test@example.com'
    this.chatMessages = this.getMessages();

    // send our message
    this.db.list('messages').push({
      message: msg,
      timeSent: timestamp,
      // username: this.userName,
      username: 'test-user',
      email: email,
    });
    
    console.log('Called sendMessage()!');
  }

  getMessages(): Observable<ChatMessage[]>{
    return this.db.list('messages', ref => ref.limitToLast(25).orderByKey()).valueChanges();
  }

  getTimeStamp(): string {
    const now = new Date();
    const date = now.getUTCFullYear() + '/' + 
                 (now.getUTCMonth() + 1) + '/' +
                 now.getUTCDate();
    const time = now.getUTCHours() + ':' + 
                 now.getUTCMinutes() + ':' +
                now.getUTCSeconds();
    return (date + ' ' + time);
  }
}
