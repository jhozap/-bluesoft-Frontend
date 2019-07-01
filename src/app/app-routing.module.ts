import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibrosComponent } from './pages/libros/libros.component';
import { AutoresComponent } from './pages/autores/autores.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';

const routes: Routes = [
  { path: 'Libros', component: LibrosComponent},
  { path: 'Autores', component: AutoresComponent},
  { path: 'Categorias', component: CategoriasComponent},
  { path: '**', redirectTo: 'Libros', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
