import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { PathologyComponent } from './pathology/pathology.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: PathologyComponent },
];
