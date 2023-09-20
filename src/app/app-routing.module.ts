import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { AuthLoginGuard } from 'src/app/guards/authLogin.guard';

const routes: Routes = [
  {path:'', component:AuthComponent, canActivate:[AuthLoginGuard]},
  {path:'dashboard', component:DashboardComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
