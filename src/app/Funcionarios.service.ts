import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionarios } from './model/Funcionarios';
import { plantoes } from './model/plantoes';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

 private  url = 'http://localhost:2345'
  constructor(private http:HttpClient) { }

  cadastroFuncionario(funcionarios:Funcionarios):Observable<Funcionarios>{
    return this.http.post<Funcionarios>(`${this.url}/funcionarios`,funcionarios,this.httpOptions) 
  }
  plantoesDiurnos(plantoesDiurnos:plantoes):Observable<plantoes>{
    return  this.http.post<plantoes>(`${this.url}/plantoesDiurnos`, plantoesDiurnos ,this.httpOptions)
  }
  plantoesNoturnos(plantoesNoturnos:plantoes):Observable<plantoes>{
    return this.http.post<plantoes>(`${this.url}/plantoesNoturnos` , plantoesNoturnos , this.httpOptions)
  }
  

   /*getFuncionarios*/
  getFuncionarios():Observable<Funcionarios>{
    return this.http.get<Funcionarios>(`${this.url}/funcionarios`)   
  }
  

  /*getNoturnos by id*/
  getNoturnos(id:number):Observable<Funcionarios>{
    return this.http.get<Funcionarios>(`${this.url}/plantoesNoturnos/${id}`)
  }
  /*getDiurno by id*/
  getDiurnos(id:number):Observable<Funcionarios>{
    return this.http.get<Funcionarios>(`${this.url}/plantoesDiurnos/${id}`)
  }
    /*header*/
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    
  }
}
