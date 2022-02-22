import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LibroPageRoutingModule } from './libro-routing.module';

import { LibroPage } from './libro.page';

import { IonicStorageModule } from '@ionic/storage-angular';
import { StorageService } from '../services/storage.service';
import { BiblioServService } from '../services/biblio-serv.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LibroPageRoutingModule,
    IonicStorageModule.forRoot()

  ],
  providers: [StorageService, BiblioServService],
  declarations: [LibroPage]
})
export class LibroPageModule {}
