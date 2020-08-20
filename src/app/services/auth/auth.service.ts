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

  constructor(private afAuth: AngularFireAuth,
              private db: AngularFireDatabase,
              private router: Router) {
                this.user = afAuth.authState;
               }

  get currentUserId(): string {
    return this.authState !== null ? this.authState.user.uid : '';
  }

  authUser(): Observable<firebase.User> {
    return this.user;
  }

  logout(): void {
    this.afAuth.auth.signOut();
    this.router.navigate(['login']);
  }

  login(user: User): Promise<void> {
    console.log('logging in...');
    return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then((account) => {
        this.authState = account;
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
        this.router.navigate(['chat']);
      });
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

