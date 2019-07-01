import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constants } from '../common/constants.class';
import { Libro } from '../model/libro.class';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  constructor(private http: HttpClient) { }

  protected generateBasicHEaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  getLibros() {
    return this.http.get(Constants.pathService + `/Libros`, { headers: this.generateBasicHEaders() });
  }

  getLibroById(id: number) {
    return this.http.get(Constants.pathService + `/Libros/${id}`, { headers: this.generateBasicHEaders() });
  }

  postLibro(params: Libro) {
    return this.http.post(Constants.pathService + `/Libros`, params, { headers: this.generateBasicHEaders() });
  }

  putLibro(params: Libro) {
    return this.http.put(Constants.pathService + `/Libros/${params.id}`, params, { headers: this.generateBasicHEaders() });
  }

  deleteLibro(id: number) {
    return this.http.delete(Constants.pathService + `/Libros/${id}`, { headers: this.generateBasicHEaders() });
  }
}
