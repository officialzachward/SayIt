import { Routes } from '@angular/router';
import { SignupComponent } from './app/signup/signup.component';
import { LoginComponent } from './app/login/login.component';
import { RoomComponent } from './app/room/room.component';

export const appRoutes: Routes = [
    {path: 'signup', component: SignupComponent},
    {path: 'login', component: LoginComponent},
    {path: 'chat', component: RoomComponent},
    {path: '', redirectTo: '/login', pathMatch: 'full'},
];