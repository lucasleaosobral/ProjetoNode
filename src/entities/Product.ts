import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'produtos'})
export class Product {
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column('text', {nullable: false})
    name: string;

}