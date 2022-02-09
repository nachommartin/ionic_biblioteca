import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from '../interfaces/libro';
import { BiblioServService } from '../services/biblio-serv.service';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.page.html',
  styleUrls: ['./biblioteca.page.scss'],
})
export class BibliotecaPage implements OnInit {


  encodedData: any;
  scannedBarCode: {};
  barcodeScannerOptions: BarcodeScannerOptions;


  libros:Array<Libro>
  busqueda:string; 
  isbn:string;


  constructor(private servicio:BiblioServService, private router: Router, private scanner: BarcodeScanner) { 

    this.encodedData = "Programming isn't about what you know";
      
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };


  }

  ngOnInit() {
  }
  

  
  obtenerLibros(){

    
    this.servicio.getBibliotecaLibros(this.busqueda).subscribe({
      
     next: resp=>{this.libros=resp.docs},
     error:err=>{console.log(err)}
   
   });
 }

 getLibro(pk_isbn:any){
    
  this.isbn=pk_isbn;
  console.log("isbn")
  this.router.navigate(["/libro", pk_isbn]);
}

escanear(){
  this.scanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.scannedBarCode=barcodeData;
  }).catch(err => {
    console.log('Error', err);
});
}

}
