import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modulos
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';


import { AppComponent } from './app.component';

import { AuthModule } from './auth/auth.module';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';



@NgModule({
  declarations: [
    AppComponent,

    // LoginComponent,
    // RegisterComponent,


    NopagefoundComponent,
    
    // BreadcrumbsComponent,
    // SidebarComponent,
    // HeaderComponent
    
    //estos modulos los pase al pages module/pages routing
    //DashboardComponent,
    //ProgressComponent,
    //Grafica1Component,
    //PagesComponent          
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
