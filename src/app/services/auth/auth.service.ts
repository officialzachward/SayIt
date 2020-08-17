import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Observable<firebase.User>;
  private authState: firebase.auth.UserCredential;
  // private currentUserId: string;

  constructor(private afAuth: AngularFireAuth,
              private db: AngularFireDatabase,
              private router: Router) {
                this.user = afAuth.authState;
                // this.currentUserId = this.authState !== null ? this.authState.uid : '';
               }

  get currentUserId(): string {
    return this.authState !== null ? this.authState.user.uid : '';
  }

  login(user: User): Promise<void> {
    return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then(resolve => {
        this.setUserStatus('online');
        this.router.navigate(['chat']);
      });
  }

  register(user: User): Promise<void> {
    // create user for first time in DB
    return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then((authuser) => {
        this.authState = authuser;
        this.setUserData(user.email, user.username, 'online');
      }).catch(error => console.log(error));
  }

  setUserData(email: string, username: string, status: string): void {
    const path = `users/${this.currentUserId}`;
    const data = {
      email,
      displayName: username,
      status
    };

    // update specific user info
    this.db.object(path).update(data);
  }

  setUserStatus(status: string): void {
    const path = `users/${this.currentUserId}`;
    const data = {
      status
    };

    // TODO: finish this
  }
}

