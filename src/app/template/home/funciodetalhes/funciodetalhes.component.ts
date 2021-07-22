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
  horasDiurnas: any
  horasNoturnas: any
  constructor(private route:ActivatedRoute,private funcionarioService:FuncionariosService) { }

  ngOnInit(): void {
    this.getHorasDiurna()
    this.getHorasNotunas()
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
    }else if(f.value.turno == "plantoesNoturnos"){
      console.log('plantoesNoturnos')
      this.funcionarioService.plantoesNoturnos(horas).subscribe()
      
    }
  }

  getHorasDiurna(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.funcionarioService.getDiurnos(id).subscribe(
      horasDiurnas => this.horasDiurnas = horasDiurnas

    )
  }

  getHorasNotunas(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.funcionarioService.getNoturnos(id).subscribe(
      horasNoturnas => this.horasNoturnas = horasNoturnas
    )
  }

  deleteHorasDiurna(id:number){
    this.funcionarioService.deleteHorasDiurna(id).subscribe()
  }

  deleteHoraNoturna(id:number){

  }



}
