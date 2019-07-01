import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constants } from '../common/constants.class';
import { Autor } from '../model/autor.class';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  constructor(private http: HttpClient) { }

  protected generateBasicHEaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  getAutores() {
    return this.http.get(Constants.pathService + `/Autores`, { headers: this.generateBasicHEaders() });
  }

  getAutorById(id: number) {
    return this.http.get(Constants.pathService + `/Autores/${id}`, { headers: this.generateBasicHEaders() });
  }

  postAutor(params: Autor) {
    return this.http.post(Constants.pathService + `/Autores`, params, { headers: this.generateBasicHEaders() });
  }

  putAutor(params: Autor) {
    return this.http.put(Constants.pathService + `/Autores/${params.id}`, params, { headers: this.generateBasicHEaders() });
  }

  deleteAutor(id: number) {
    return this.http.delete(Constants.pathService + `/Autores/${id}`, { headers: this.generateBasicHEaders() });
  }
}
