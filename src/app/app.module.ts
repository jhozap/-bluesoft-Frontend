import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { LibrosComponent } from './pages/libros/libros.component';
import { AutoresComponent } from './pages/autores/autores.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './pages/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LibrosComponent,
    AutoresComponent,
    CategoriasComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    NgSelectModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
