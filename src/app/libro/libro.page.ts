import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { stringify } from 'querystring';
import { Libro } from '../interfaces/libro';
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
  /*
  titulo:string;
  anyo:string;
  editorial:string;
  foto:string;
  autor:string[];*/
  //Mejor con una interfaz
  libro:Libro; 
  fav:boolean = false;
  librosFav: Libro[] = [];
  mostrarFav : boolean = false;


  constructor(private servicio: BiblioServService, private ruta: ActivatedRoute,
    private storage: StorageService) { }

  ngOnInit() {

    this.isbn=this.ruta.snapshot.params.isbn


    this.obtenerDatos();

    this.storage.allFavorites()

  }

  
  obtenerDatos(): void {

    this.servicio.getLibroBusqueda(this.isbn).subscribe({

      next: resp=>{
        /*
        this.titulo=resp.docs[0].title;
        this.editorial=resp.docs[0]
        this.autor=resp.docs[0].author_name;
        this.editorial=resp.docs[0].publisher[0]
        this.anyo=resp.docs[0].first_publish_year
        this.foto=resp.docs[0].isbn[2]*/
        this.libro=resp.docs[0];
        this.checkFavorito(this.libro);
      },
      error:err=>{console.log(err)}
    


    })

  }

  mostrar(){    
    this.librosFav = this.storage._favoritos;
    this.mostrarFav = true;
    console.log(this.librosFav);
  }



  favorito(storageKey: string, value: any){
    this.storage.addFavorito(storageKey, value);
    this.fav = true;
  }

  quitarFavorito(storageKey: string){
    this.storage.borrarFavorito(storageKey);
    this.fav = false;
  }

  
  checkFavorito(libro: Libro){  
    this.storage.findFavorito(libro.isbn[2]).then(
      result => {
        if(result){
          this.fav = true;
        }else{
          this.fav = false;
        }
      }
    )

  }


}
