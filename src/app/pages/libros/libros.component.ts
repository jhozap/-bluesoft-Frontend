import { Component, OnInit, ViewChild } from '@angular/core';
import { NgSelectConfig, NgSelectComponent } from '@ng-select/ng-select';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs/operators';
import { LibroService } from 'src/app/services/libro.service';
import { Libro } from 'src/app/model/libro.class';
import Swal from 'sweetalert2';
import { Autor } from 'src/app/model/autor.class';
import { Categoria } from 'src/app/model/categoria.class';
import { AutorService } from 'src/app/services/autor.service';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

@ViewChild(NgSelectComponent, {static: false}) selectAutor: NgSelectComponent;

@ViewChild(NgSelectComponent, {static: false}) selectCategoria: NgSelectComponent;

  LibroEdit: Libro;
  AutorSelected: Autor;
  CategoriaSelected: Categoria;
  Libros: Array<Libro> = [];
  Autores: Array<Autor> = [];
  Categorias: Array<Categoria> = [];

  constructor(private spinner: NgxSpinnerService,
              public _LibroService: LibroService,
              public _AutorService: AutorService,
              public _CategoriaService: CategoriaService,
              private config: NgSelectConfig) {
                this.config.notFoundText = 'No se encontraron datos';
                this.LibroEdit = new Libro();
               }

  ngOnInit() {
    this.getLibros();
    this.getAutores();
    this.getCategorias();
  }

  getLibros() {
    // lanzar ventana de carga
    this.spinner.show();
    // consumo de servicio para consultar proyecciones
    this._LibroService.getLibros().pipe(
      finalize(() => {
        // ocultar ventana de carga
        this.spinner.hide();
      }))
      .subscribe(
        (data: Libro[]) => {
          if (data) {
            this.Libros = data;
            console.log(this.Libros);
          } else {
            Swal.fire({
              title: 'Error!',
              text: 'no se retornaron datos',
              type: 'error',
              confirmButtonText: 'Cool'
            });
          }
        }, (error: any) => {
          Swal.fire({
            title: 'Error!',
            text: error.message,
            type: 'error',
            confirmButtonText: 'Cool'
          });
        }
      );
  }

  getAutores() {
    this.spinner.show();
    this._AutorService.getAutores().pipe(
      finalize(() => {
        this.spinner.hide();
      }))
      .subscribe(
        (data: Autor[]) => {
          if (data) {
            this.Autores = data;
            console.log(this.Autores);
          } else {
            Swal.fire({
              title: 'Error!',
              text: 'no se retornaron datos',
              type: 'error',
              confirmButtonText: 'Cool'
            });
          }
        }, (error: any) => {
          Swal.fire({
            title: 'Error!',
            text: error.message,
            type: 'error',
            confirmButtonText: 'Cool'
          });
        }
      );
  }

  getCategorias() {
    this.spinner.show();
    this._CategoriaService.getCategorias().pipe(
      finalize(() => {
        this.spinner.hide();
      }))
      .subscribe(
        (data: Categoria[]) => {
          if (data) {
            this.Categorias = data;
            console.log(this.Categorias);
          } else {
            Swal.fire({
              title: 'Error!',
              text: 'no se retornaron datos',
              type: 'error',
              confirmButtonText: 'Cool'
            });
          }
        }, (error: any) => {
          Swal.fire({
            title: 'Error!',
            text: error.message,
            type: 'error',
            confirmButtonText: 'Cool'
          });
        }
      );
  }

  nuevoLibro(libro: Libro) {

  }

  updateLibro(libro: Libro) {

  }

  deleteLibro(libro: Libro) {

  }

  editarLibro(libro: Libro) {
    this.LibroEdit = libro;
  }

  limpiar() {
    this.LibroEdit = new Libro();
  }

}
