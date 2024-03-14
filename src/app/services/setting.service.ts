import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  private linkTheme = document.querySelector('#theme');

  constructor() { 
    //console.log("Inicio servicios");
    //si viene vacio el localstorage traeme por defecto el tema purple
    const url = localStorage.getItem('theme') || "./assets/css/colors/purple-dark.css";
    this.linkTheme.setAttribute('href', url);
  }

  changeTheme(theme: string){ 
    //esto lo obtengo desde el index
    //const linkTheme = document.querySelector('#theme');
    const url = "./assets/css/colors/" + theme + ".css";

    //cambiame el href actual por esta url
    this.linkTheme.setAttribute('href', url);
    localStorage.setItem("theme", url);

    this.checkCurrentTheme();
  }

  //para poner el css del check en el boton de color que elegi
  checkCurrentTheme(){

    const links = document.querySelectorAll('.selector');

    links.forEach(elem => {
      //el working da la forma del chekc en el boton
      elem.classList.remove("working");

      //obtengo el valor del data theme del cuadrito del color en el html
      const btnTheme = elem.getAttribute("data-theme");

      //obtengo el href del color que elegi
      const btnThemeUrl = "./assets/css/colors" + btnTheme + ".css";

      //obtengo el valor del href del color actual que tiene el tema
      const currentTheme = this.linkTheme.getAttribute("href");

      if(btnThemeUrl === currentTheme){
        //agrega el css del check
        elem.classList.add("working");
      }
    })

  }
}
