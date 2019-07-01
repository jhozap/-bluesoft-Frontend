import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
import { Categoria } from 'src/app/model/categoria.class';
import { CategoriaService } from 'src/app/services/categoria.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  CategoriaEdit: Categoria;
  Categorias: Array<Categoria> = [];

  constructor(private spinner: NgxSpinnerService,
              public _CategoriaService: CategoriaService) {
                this.CategoriaEdit = new Categoria();
               }

  ngOnInit() {
    this.getCategorias();
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

  nuevaCategoria() {
    if (this.valida()) {
      this.spinner.show();
      this._CategoriaService.postCategoria(this.CategoriaEdit).pipe(
        finalize(() => {
          this.spinner.hide();
        }))
        .subscribe(
          (data: Categoria) => {
            if (data) {
              if (data.id > 0) {
                Swal.fire({
                  title: 'Excelente!',
                  text: 'Categoria Guardada Exitosamente',
                  type: 'success',
                  confirmButtonText: 'Ok'
                });
                this.getCategorias();
              }
              console.log(this.Categorias);
            } else {
              Swal.fire({
                title: 'Error!',
                text: 'no se retornaron datos',
                type: 'error',
                confirmButtonText: 'Ok'
              });
            }
          }, (error: any) => {
            Swal.fire({
              title: 'Error!',
              text: error.message,
              type: 'error',
              confirmButtonText: 'Ok'
            });
          }
        );
    }
  }

  editarCategoria(categoria: Categoria) {
    this.CategoriaEdit = categoria;
  }

  limpiar() {

  }

  valida(): boolean {
    if (this.CategoriaEdit.nombre === null || this.CategoriaEdit.nombre === undefined ||
                                              this.CategoriaEdit.nombre === ' ') {
      Swal.fire({
        title: 'Error!',
        text: 'El Nombre no puede estar vacio',
        type: 'error',
        confirmButtonText: 'Ok'
      });
      return false;
    } else if (this.CategoriaEdit.descripcion === null || this.CategoriaEdit.descripcion === undefined ||
        this.CategoriaEdit.descripcion === ' ') {
        Swal.fire({
        title: 'Error!',
        text: 'La Descripcion no puede estar vacia',
        type: 'error',
        confirmButtonText: 'Ok'
        });
        return false;
      }

    return true;
  }

}
