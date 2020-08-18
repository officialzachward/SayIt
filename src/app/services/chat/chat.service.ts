import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import * as firebase from 'firebase/app';

import { ChatMessage } from '../../models/message.model';
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  user: firebase.User;
  chatMessages: Observable<ChatMessage[]>;
  chatMessage: ChatMessage;
  userName: Observable<string>;
  constructor(private db: AngularFireDatabase,
              private afAuth: AngularFireAuth) {
                this.afAuth.authState.subscribe(auth => {
                  if (auth !== undefined && auth !== null) {
                    this.user = auth;
                  }

                  this.getUser().subscribe(account => this.userName = account.displayName);

                });
              }

  getUser(): any {
    const userID: string = this.user.uid;
    const path: string = `/users/${userID}`;
    return this.db.object(path).valueChanges();
  }

  getUsers(): any {
    const path: string = '/users';
    return this.db.list(path).valueChanges();
  }

  sendMessage(msg: string): void {
    const timestamp: number = this.getTimeStamp();
    const email: string = this.user.email;
    this.chatMessages = this.getMessages();

    console.log('retrieving timestamp...')
    console.log(timestamp);
    // send our message
    this.db.list('messages').push({
      message: msg,
      timeSent: timestamp,
      username: this.userName,
      email: email,
    });
  }

  getMessages(): Observable<ChatMessage[]> {
    return this.db.list('messages', ref => ref.limitToLast(25).orderByKey()).valueChanges();
  }

  getTimeStamp(): number {
    return new Date().getTime();
  }
}
