import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//Modulos
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';



//approutingmodule contiene mis rutas principales
const routes: Routes = [
  // { 
  //   path: '', 
  //   component: PagesComponent,
  //   children: [
  //     //todas estas rutas tendran el template de PagesComponent(header,navbar,breadcumps, etc)

  //     // localhost:4200/dashboard
  //     { path: 'dashboard', component: DashboardComponent },
  //     { path: 'progress', component: ProgressComponent },
  //     { path: 'grafica1', component: Grafica1Component },
  //     { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
  //   ]
  // },
 
  // { path: 'register', component: RegisterComponent },
  // //localhost:4200/login
  // { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: '**', component: NopagefoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
