import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Autor } from 'src/app/model/autor.class';
import { AutorService } from 'src/app/services/autor.service';
import Swal from 'sweetalert2';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {

  AutorEdit: Autor;
  Autores: Array<Autor> = [];

  constructor(private spinner: NgxSpinnerService,
        public _AutorService: AutorService) {
          this.AutorEdit = new Autor();
        }

  ngOnInit() {
  }

  getAutores() {

  }

  nuevoAutor() {
    if (this.valida()) {
      this.spinner.show();
      this._AutorService.postAutor(this.AutorEdit).pipe(
        finalize(() => {
          this.spinner.hide();
        }))
        .subscribe(
          (data: Autor) => {
            if (data) {
              if (data.id > 0) {
                Swal.fire({
                  title: 'Excelente!',
                  text: 'Autor Guardado Exitosamente',
                  type: 'success',
                  confirmButtonText: 'Ok'
                });
                this.getAutores();
              }

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

  editarAutor(autor: Autor) {
    if (this.valida()) {
      this.spinner.show();
      this._AutorService.putAutor(this.AutorEdit).pipe(
        finalize(() => {
          this.spinner.hide();
        }))
        .subscribe(
          (data: Autor) => {
            if (data) {
              if (data.id > 0) {
                Swal.fire({
                  title: 'Excelente!',
                  text: 'Autor Actualizado Exitosamente',
                  type: 'success',
                  confirmButtonText: 'Ok'
                });
                this.getAutores();
              }

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

  deleteAutor(autor: Autor) {
    this.spinner.show();
    this._AutorService.deleteAutor(this.AutorEdit.id).pipe(
      finalize(() => {
        this.spinner.hide();
      }))
      .subscribe(
        (data: Autor) => {
          if (data) {
            if (data.id > 0) {
              Swal.fire({
                title: 'Excelente!',
                text: 'Autor Guardado Exitosamente',
                type: 'success',
                confirmButtonText: 'Ok'
              });
              this.getAutores();
            }

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

  valida(): boolean {
    if (this.AutorEdit.nombre === null || this.AutorEdit.nombre === undefined ||
                                              this.AutorEdit.nombre === ' ') {
      Swal.fire({
        title: 'Error!',
        text: 'El Nombre no puede estar vacio',
        type: 'error',
        confirmButtonText: 'Ok'
      });
      return false;
    } else if (this.AutorEdit.apellidos === null || this.AutorEdit.apellidos === undefined ||
        this.AutorEdit.apellidos === ' ') {
        Swal.fire({
        title: 'Error!',
        text: 'El Apellido no puede estar vacio',
        type: 'error',
        confirmButtonText: 'Ok'
        });
        return false;
      } else if (this.AutorEdit.fechaNacimiento === null || this.AutorEdit.fechaNacimiento === undefined ) {
        Swal.fire({
        title: 'Error!',
        text: 'Debe Ingresa una Fecha Valida',
        type: 'error',
        confirmButtonText: 'Ok'
        });
        return false;
      }

    return true;
  }


  limpiar() {

  }

}
