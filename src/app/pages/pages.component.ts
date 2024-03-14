import { Component, OnInit } from '@angular/core';
import { SettingService } from '../services/setting.service';

declare function customInitFunctions();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: []
})
export class PagesComponent implements OnInit {

  //basta con que yo inyecte este servicio para que se ejecute automaticamente el metodo
  //que esta en el constructor del settingService
  constructor(private settingServices: SettingService) { }

  ngOnInit(): void {
    //confia en mi ts y no marques error , ya que esta funcion existe de manera global en el assets, js, custom
    //lo que hace el custom es inicializar todos los estilos de la maestra 
    customInitFunctions();

  }

}
