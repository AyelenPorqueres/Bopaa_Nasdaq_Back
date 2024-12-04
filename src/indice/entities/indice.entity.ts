import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

//Creo las entitys y su contructor. 
@Entity()
export class Indice {

    @PrimaryGeneratedColumn({
        type: 'bigint'
    })
    public id: number;

    @Column({
        name: 'fecha',
        type: 'varchar',
        precision: 10,
    })
    public fecha: string;

    @Column({
        name: 'hora',
        type: 'varchar',
        precision: 5,
    })
    public hora: string;

    @Column({
        name: 'codigoIndice',
        type: 'varchar',
        precision: 10,
    })
    public codigoIndice: string;

    @Column({
        name: 'valorIndice',
        type: 'decimal',
        precision: 15,
        scale: 2,
    })
    public valorIndice: number;

    constructor(codigoIndice: string, valor: number, fecha: string, hora: string) {
        this.codigoIndice = codigoIndice;
        this.valorIndice = valor;
        this.fecha = fecha;
        this.hora = hora;
    }

}
