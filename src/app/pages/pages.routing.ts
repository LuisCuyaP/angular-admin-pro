import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Grafica1Component } from "./grafica1/grafica1.component";
import { AccountSettingComponent } from "./account-setting/account-setting.component";

//esto es una ruta hija por modulo
const routes: Routes = [
    { 
        //en teoria estas rutas son para las personas autenticadas
        path: 'dashboard', 
        component: PagesComponent,
        children: [
          //todas estas rutas(osea los formularios) tendran el template de PagesComponent(header,navbar,breadcumps, etc)
    
          // localhost:4200/dashboard/
          { path: '', component: DashboardComponent },
           // localhost:4200/dashboard/progress
          { path: 'progress', component: ProgressComponent },
          { path: 'grafica1', component: Grafica1Component },
          { path: 'account-settings', component: AccountSettingComponent }          

        ]
    }

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
export class PagesRoutingModule {}