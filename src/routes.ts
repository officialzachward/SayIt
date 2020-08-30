import { Routes } from '@angular/router';
import { SignupComponent } from './app/signup/signup.component';
import { LoginComponent } from './app/login/login.component';
import { RoomComponent } from './app/room/room.component';
import { ProfileComponent } from './app/profile/profile.component';
import { AboutComponent } from './app/about/about.component';

export const appRoutes: Routes = [
    {path: 'signup', component: SignupComponent},
    {path: 'login', component: LoginComponent},
    {path: 'chat', component: RoomComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'about', component: AboutComponent},
    {path: '', redirectTo: '/login', pathMatch: 'full'},
];
