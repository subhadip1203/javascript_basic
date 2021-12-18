
import {Entity, PrimaryGeneratedColumn, CreateDateColumn, ManyToMany , JoinTable} from "typeorm";
import { User } from "./User";

@Entity('banker')
export class Banker {

  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  created_at: Date;
  
  @ManyToMany(() => User, user => user.bankers)
  @JoinTable()
  categories: User[];

}




