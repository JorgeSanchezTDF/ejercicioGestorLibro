import {Libro  } from "./POOLibro";

class GestorLibros {
    private listadoLibros : Libro[];

    constructor(listadoLibro: Libro[]) {
        this.listadoLibros = listadoLibro;
    }
    
    public insertarLibro(newLibro: Libro):void{
        this.listadoLibros.push(newLibro);
    }

    public eliminarLibro(deleteLibro: Libro):void{
        for (let index = 0; index < this.listadoLibros.length; index++) {
            if (deleteLibro.getTitulo() === this.listadoLibros[index].getTitulo()) {
                this.listadoLibros.splice(index,1);
                console.log('Eliminamos el libro' + deleteLibro.getTitulo);                
            } else {
                console.log('No se encontro el Libro' + deleteLibro.getTitulo);
                
            }
    public consultarLibro(consulLibro: Libro):boolean{
                return consulLibro.getTitulo() === this.listadoLibros.titulo();
            }           
        }
    }

}