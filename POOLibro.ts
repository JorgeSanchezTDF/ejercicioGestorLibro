export class Libro {
    protected titulo: string;
    protected genero: string;
    protected editorial: string;
    protected anio: number;

    constructor(pTitulo: string, pGenero: string, pEditorial: string, pAnio: number) {
        this.titulo = pTitulo;
        this.genero = pGenero;
        this.editorial = pEditorial;
        this.anio = pAnio;
    }

    public getTitulo(): string {
        return this.titulo;
    }
    public setTitulo(pTitulo): void {
        this.titulo = pTitulo;
    }

    public getGenero(): string {
        return this.genero;
    }

    public setGenero(pGenero: string) {
        this.genero = pGenero;
    }

    public getEditorial(): string {
        return this.editorial;
    }

    public setEditorial(pEditorial: string) {
        this.editorial = pEditorial;
    }

    public getAnio(): number {
        return this.anio;
    }

    public setAnio(pAnio: number) {
        this.anio = pAnio;
    }
}