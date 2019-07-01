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
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LibrosComponent,
    AutoresComponent,
    CategoriasComponent
  ],
  imports: [
    BrowserModule,
    GridModule,
    NgSelectModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
    AppRoutingModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
