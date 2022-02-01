import { Libro } from "./libro";

export interface Biblioteca {

    start:number,
    num_found:number,
    docs:Array<Libro>;
}
