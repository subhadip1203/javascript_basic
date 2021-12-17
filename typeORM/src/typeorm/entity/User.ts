import {Entity, PrimaryGeneratedColumn, Column, OneToMany, Transaction} from "typeorm";
import { Transaction } from './transaction'

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

}
