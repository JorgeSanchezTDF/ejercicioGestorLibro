import { Libro } from "./POOLibro";

class GestorLibros {
    private listadoLibros: Libro[];

    constructor(listadoLibro: Libro[]) {
        this.listadoLibros = listadoLibro;
    }

    public insertarLibro(newLibro: Libro): void {
        this.listadoLibros.push(newLibro);
    }

    public eliminarLibro(deleteLibro: Libro): void {
        for (let index = 0; index < this.listadoLibros.length; index++) {
            if (deleteLibro.getTitulo() === this.listadoLibros[index].getTitulo()) {
                this.listadoLibros.splice(index, 1);
                console.log('Eliminamos el libro' + deleteLibro.getTitulo);
            } else {
                console.log('No se encontro el Libro' + deleteLibro.getTitulo);
            }
        }
    }

    public consultarLibro(consulLibro: Libro): void {
        for (let index = 0; index < this.listadoLibros.length; index++) {
            if (consulLibro.getTitulo() === this.listadoLibros[index].getTitulo()) {
                console.log('Libro consultado:' + consulLibro);
            } else {
                console.log('No se encontro el Libro consultado en la lista');
            }
        }
    }

    public modificarLibro(modLibro: Libro): void {
        for (let index = 0; index < this.listadoLibros.length; index++) {
            if (modLibro.getTitulo() === this.listadoLibros[index].getTitulo()) {
                this.listadoLibros[index].setGenero('Otro');
            } else {
                console.log('No se encontro el Libro en la lista');
            }
        }
    }
}