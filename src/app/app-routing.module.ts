import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { AuthLoginGuard } from 'src/app/guards/authLogin.guard';

const routes: Routes = [
  // Acceso a las rutas, tambien hacemos lazyLoading para no precargar rutas, asi tambien nos aseguramos de que no tengan acceso alguno.
  {path:'', component:AuthComponent, canActivate:[AuthLoginGuard], loadChildren:()=>import('./init/init.module').then(m=>m.InitModule)},
  {path:'dashboard', component:DashboardComponent, canActivate: [AuthGuard], loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
