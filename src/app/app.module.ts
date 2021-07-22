import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuhomeComponent } from './template/menuhome/menuhome.component';
import { HomeComponent } from './template/home/home.component';
import { FunciodetalhesComponent } from './template/home/funciodetalhes/funciodetalhes.component';
import { CadastroComponent } from './template/cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuhomeComponent,
    HomeComponent,
    FunciodetalhesComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
