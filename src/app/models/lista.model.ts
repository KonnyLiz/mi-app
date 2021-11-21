import { ListaItem } from "./lista-item.model";

export class Lista {
    id: number;
    titulo: string;
    created_at: Date;
    completed_at: Date;
    completed: boolean;
    items: ListaItem[];

    constructor(
        titulo: string
    ) {
        this.titulo = titulo;
        this.created_at = new Date();
        this.completed = false;
        this.items = [];

        // obtenemos un numero entero unico para el id
        this.id = new Date().getTime();
    }
}