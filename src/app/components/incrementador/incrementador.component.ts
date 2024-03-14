import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {
  @Input('valor') progreso: number;
  //progreso: number = 20;
  @Input() btnClass: string = 'btn-primary';


  @Output('valor') valorSalido: EventEmitter<number> = new EventEmitter();
  //@Output() valorSalido: EventEmitter<number> = new EventEmitter();

  // get getPorcentaje(){
  //   return this.progreso + "%";
  // }

  cambiarValor(valor: number){

    if(this.progreso >= 100 && valor >= 0){
      this.valorSalido.emit(100);
      return this.progreso = 100;      
    }

    if(this.progreso <= 0 && valor < 0){
      this.valorSalido.emit(0);
      return this.progreso = 0;      
    }

    this.progreso = this.progreso + valor;
    this.valorSalido.emit(this.progreso);
  }

  constructor() { }

  ngOnInit(): void {
    this.btnClass = "btn " + this.btnClass;
  }

  onChange(nuevoValor: number){
    if(nuevoValor >= 100){
      this.progreso = 100;
    }else if(nuevoValor <= 0){
      this.progreso = 0;
    }else{
      this.progreso = nuevoValor;
    }

    this.valorSalido.emit(this.progreso);
  }
}
