import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

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

}
