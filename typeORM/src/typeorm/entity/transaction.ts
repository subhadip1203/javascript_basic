import {Entity, PrimaryGeneratedColumn, Column , CreateDateColumn, ManyToOne, JoinColumn} from "typeorm";
import { User } from "./User";

@Entity('transaction')
export class Transaction {

  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  created_at: Date;
  
  @ManyToOne(
    ()=> User,
    client => client.transaction
  )
  @JoinColumn({
    name: 'userId'
  })
  client : User

}
