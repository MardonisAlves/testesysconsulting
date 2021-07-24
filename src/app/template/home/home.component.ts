import { Component, OnInit } from '@angular/core';
import { FuncionariosService } from 'src/app/Funcionarios.service';
import { plantoes } from 'src/app/model/plantoes';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})




export class HomeComponent implements OnInit {
  funcionarios: any
  plantoes: plantoes[] = []

  constructor(private serviceFuncionario: FuncionariosService) { }

  ngOnInit(): void {
    this.getFuncionarios()


  }

  getFuncionarios() {

    this.serviceFuncionario.getFuncionarios()
      .subscribe(funcionarios => this.funcionarios = funcionarios)
      .add(() => {
        for (let index = 0; index < this.funcionarios.length; index++) {
          const element = this.funcionarios[index];

          const HorasFeitasplantoesNoturnos = element.plantoesNoturnos.reduce((prevVal: any, elem: any) => {
            return prevVal + elem.HorasFeitas
          }, 0)

          const HorasFeitasPlantoesDiurnos = element.plantoesDiurnos.reduce((prevVal: any, elem: any) => {
            return prevVal + elem.HorasFeitas
          }, 0)

          const HorasPlanejadasDiurnas = element.plantoesDiurnos.reduce((prevVal:any , elem:any) => {
            return prevVal + elem.HorasPlanejadas
          },0)

          const HorasPlanejadasNoturnas = element.plantoesNoturnos.reduce((prevVal:any,elem:any)=>{
              return prevVal + elem.HorasPlanejadas
          },0)

          console.log(HorasFeitasPlantoesDiurnos)
          const plantoes: plantoes = {
            'id': element.id,
            'nome': element.nome,
            'cargo': element.cargo,
            'funcionarioId': 1,
            'HorasPlanejadasDiurnas': HorasPlanejadasDiurnas,
            'HorasPlanejadasNoturnas': HorasPlanejadasNoturnas,
            'HorasFeitasplantoesNoturnos': HorasFeitasplantoesNoturnos,
            'HorasFeitasPlantoesDiurnos': HorasFeitasPlantoesDiurnos,
            'HorasCorrigidas': 152

          }

          this.plantoes.push(plantoes)
          console.log(this.plantoes)
        }
      })


  }



}
