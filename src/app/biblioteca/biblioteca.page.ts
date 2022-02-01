import { Component, OnInit } from '@angular/core';
import { Libro } from '../interfaces/libro';
import { BiblioServService } from '../services/biblio-serv.service';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.page.html',
  styleUrls: ['./biblioteca.page.scss'],
})
export class BibliotecaPage implements OnInit {

  libros:Array<Libro>

  constructor(private servicio:BiblioServService) { }

  ngOnInit() {
    this.obtenerLibros()
  }

  
  obtenerLibros(){

    
    this.servicio.getBibliotecaLibros().subscribe({
      
     next: resp=>{this.libros=resp.docs},
     error:err=>{console.log(err)}
   
   });
 }

}
