import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Biblioteca } from '../interfaces/biblioteca';

@Injectable({
  providedIn: 'root'
})
export class BiblioServService {

  url:string= "http://openlibrary.org/search.json"

  constructor(private http: HttpClient) { }

  getBibliotecaLibros():Observable<Biblioteca>{

    const params = new HttpParams().set("title", "batman").set("limit", "10");

     return   this.http.get<Biblioteca>(`${this.url}`, {params:params});

 }
}
