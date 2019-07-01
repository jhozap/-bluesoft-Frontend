import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constants } from '../common/constants.class';
import { Categoria } from '../model/categoria.class';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  protected generateBasicHEaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  getCategorias() {
    return this.http.get(Constants.pathService + `/Categorias`, { headers: this.generateBasicHEaders() });
  }

  getCategoriaById(id: number) {
    return this.http.get(Constants.pathService + `/Categorias/${id}`, { headers: this.generateBasicHEaders() });
  }

  postCategoria(params: Categoria) {
    return this.http.post(Constants.pathService + `/Categorias`, params, { headers: this.generateBasicHEaders() });
  }

  putCategoria(params: Categoria) {
    return this.http.put(Constants.pathService + `/Categorias/${params.id}`, params, { headers: this.generateBasicHEaders() });
  }

  deleteCategoria(id: number) {
    return this.http.delete(Constants.pathService + `/Categorias/${id}`, { headers: this.generateBasicHEaders() });
  }
}
