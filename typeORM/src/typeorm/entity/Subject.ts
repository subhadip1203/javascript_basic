import {Entity, PrimaryGeneratedColumn, Column, PrimaryColumn , CreateDateColumn , UpdateDateColumn} from "typeorm";

@Entity('my_subjects')
export class Subject {

  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryColumn({
    type: 'uuid'
  })
  second_id: string

  @Column({
      unique: true,
      length: 20,
  })
  subjectName: string;

  @Column({
    type: "numeric",
  })
  fee: number;

  @Column({
    default: true,
    name: 'active',  // rrnaming the colume in actual database
  })
  is_active: boolean;


  @Column({
    type: 'simple-json',
    nullable: true,
  })
  additional_info: {
    name: string,
    race: string,
    age: number,
  }

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}