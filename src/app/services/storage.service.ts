import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Libro } from '../interfaces/libro';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _storage: Storage | null= null;
  _favoritos: Libro[] = [];


  constructor(private storage: Storage) { 
    this.init();
  }

  async init(){
    const storage = await this.storage.create()
    this._storage=storage
  
  }

  public set(key:string, value:any){
    this._storage?.set(key,value)

  }

  public get(key:string){
    return localStorage.get(key)

  }

  async addFavorito(storageKey: string, value: any){
    return await this.storage.set(storageKey, value);
  }

  async borrarFavorito(storageKey: string){
    return await this.storage.remove(storageKey);
  }

  async findFavorito(storageKey: string){
    return await this.storage.get(storageKey);
  }

  async allFavorites(){

    this.storage.forEach((key, value) => {
      this._favoritos.push(key);
    }); 
      return this._favoritos;
  }
}
