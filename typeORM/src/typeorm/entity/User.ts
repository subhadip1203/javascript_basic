import {Entity, PrimaryGeneratedColumn, Column, OneToMany , ManyToMany} from "typeorm";

import { Transaction } from "./Transaction";
import { Banker} from './Banker'

@Entity('my_user')
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @OneToMany(
        ()=> Transaction,
        transaction => transaction.client
    )
    transactions: Transaction[];


    @ManyToMany(
        () => Banker, 
        banker => banker.categories
    )
    bankers: Banker[];

}
