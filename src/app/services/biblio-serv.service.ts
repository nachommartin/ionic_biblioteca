import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Biblioteca } from '../interfaces/biblioteca';
import { Libro } from '../interfaces/libro';

@Injectable({
  providedIn: 'root'
})
export class BiblioServService {

  url:string= "http://openlibrary.org/search.json"
  
  Libros: Libro[]=[];


  constructor(private http: HttpClient) { }

  getBibliotecaLibros(titulo:string):Observable<Biblioteca>{

    const params = new HttpParams().set("title", titulo).set("limit", "10");

     return   this.http.get<Biblioteca>(`${this.url}`, {params:params});

 }

 getLibroBusqueda(isbn: string):Observable<any>{

  const params = new HttpParams().set("isbn", isbn).set("limit", "10");

   return   this.http.get<Biblioteca>(`${this.url}`, {params:params});

}

}
