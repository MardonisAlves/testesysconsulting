import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FuncionariosService } from 'src/app/Funcionarios.service';
import {tap} from 'rxjs/operators'


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
 
  constructor(private funcionarioService:FuncionariosService) { }
id:any
  ngOnInit(): void {
  }

  cadastro(f: NgForm){
    const funcionario = {
      id: 0,
      nome : f.value.nome ,
      cargo: f.value.cargo,
      totalHorasTrabalhadas: 0
    }
    
    this.funcionarioService.cadastroFuncionario(funcionario)
    .subscribe()

    
  }

}
