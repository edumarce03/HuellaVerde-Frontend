import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MaterialComponent } from './components/material/material.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'material', component: MaterialComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
];
