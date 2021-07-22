import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './template/cadastro/cadastro.component';
import { FunciodetalhesComponent } from './template/home/funciodetalhes/funciodetalhes.component';
import { HomeComponent } from './template/home/home.component';

const routes: Routes = [
  {path: '' , component:HomeComponent},
  {path: 'detahles/:id' , component:FunciodetalhesComponent},
  {path: 'cadastro' , component: CadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
