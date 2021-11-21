export class ListaItem {
    descripcion: string;
    estado: boolean;

    constructor(
        desc: string
    ) {
        this.descripcion = desc;
        this.estado = false;
    }
}