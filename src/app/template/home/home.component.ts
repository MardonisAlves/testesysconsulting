import { Component, OnInit } from '@angular/core';
import { FuncionariosService } from 'src/app/Funcionarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  funcionarios: any 
  horas :any
  idHoras:any
  constructor(private serviceFuncionario:FuncionariosService) { }

  ngOnInit(): void {
    this.getFuncionarios()

  }

  getFuncionarios(){
   this.serviceFuncionario.getFuncionarios()
    .subscribe( funcionarios => this.funcionarios = funcionarios )
  }

  

}
