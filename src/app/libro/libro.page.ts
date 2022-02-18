import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { stringify } from 'querystring';
import { Star } from '../interfaces/star';
import { BiblioServService } from '../services/biblio-serv.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.page.html',
  styleUrls: ['./libro.page.scss'],
})
export class LibroPage implements OnInit {

  isbn:string;
  titulo:string;
  anyo:string;
  editorial:string;
  foto:string;
  autor:string[];

  constructor(private servicio: BiblioServService, private ruta: ActivatedRoute,
    private storage: StorageService) { }

  ngOnInit() {

    this.isbn=this.ruta.snapshot.params.isbn


    this.obtenerDatos();

  }

  
  obtenerDatos(): void {

    this.servicio.getLibroBusqueda(this.isbn).subscribe({

      next: resp=>{
        
        this.titulo=resp.docs[0].title;
        this.editorial=resp.docs[0]
        this.autor=resp.docs[0].author_name;
        this.editorial=resp.docs[0].publisher[0]
        this.anyo=resp.docs[0].first_publish_year
        this.foto=resp.docs[0].isbn[2]
      },
      error:err=>{console.log(err)}
    


    })

  }

  favorito(){
    let titulo: string;
    titulo= localStorage.getItem(this.titulo)
    if(localStorage.getItem(titulo)!="true"){
    this.storage.set(this.titulo, "true" )
    }
  }

}
