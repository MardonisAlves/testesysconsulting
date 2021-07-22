import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FuncionariosService } from 'src/app/Funcionarios.service';
import { Funcionarios } from 'src/app/model/Funcionarios';
@Component({
  selector: 'app-funciodetalhes',
  templateUrl: './funciodetalhes.component.html',
  styleUrls: ['./funciodetalhes.component.css']
})
export class FunciodetalhesComponent implements OnInit {
  horasNoturnas: Funcionarios[] = []

  constructor(private route:ActivatedRoute,private funcionarioService:FuncionariosService) { }

  ngOnInit(): void {
    
  }
  cadastroHoras(f:NgForm){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const horas = {
    id:0,
    funcionarioId:id,
    HorasPlanejadas: f.value.HorasPlanejadas,
    HorasFeitas: f.value.HorasFeitas,
    HorasCorrigidas:f.value.HorasCorrigidas
    }
    if(f.value.turno == "plantoesDiurnos"){
      console.log(horas)
      this.funcionarioService.plantoesDiurnos(horas).subscribe()
    }else{
      console.log('plantoesNoturnos')
      this.funcionarioService.plantoesNoturnos(horas).subscribe()
      
    }
  }


}
