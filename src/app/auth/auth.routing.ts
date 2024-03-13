import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { PagesComponent } from "../pages/pages.component";
import { NgModule } from "@angular/core";

//esto es una ruta hija por modulo

const routes: Routes = [
    { path: 'register', component: RegisterComponent },
    //localhost:4200/login
    { path: 'login', component: LoginComponent }
          
    //{ path: 'path/:routeMaram', component: MyComponent},
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' } 
   ];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AuthRoutingModule {}