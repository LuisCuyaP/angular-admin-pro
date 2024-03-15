import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUsuarios().then( usuario => {
      console.log(usuario);
    });

    // const promesa = new Promise( (resolve, reject) => {

    //   if(false){
    //     resolve("hey");
    //   }else{
    //     reject("algo salio mal");
    //   }
      

    // });

    // //el then es cuando se ejecuto la promesa exitosamente
    // //el finally es cuando ejecuta la promesa exitosamente o con error igual escuchala
    // promesa.then( (mensaje) => {
    //   console.log(mensaje);
    // })
    // .catch(error => console.log("error en mi promesa: ", error));


    // console.log("fin del hey");
  }

  getUsuarios() {

    return new Promise(resolve => {
      fetch("https://reqres.in/api/users")
      .then(resp => resp.json())
      .then(body => resolve(body.data));
    });
    

  }


}
