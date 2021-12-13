import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('my_subjects')
export class Subject {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
      unique: true,
      length: 20,
  })
  subjectName: string;

  @Column({
    type: "numeric",
  })
  fee: number;

  @Column()
  is_active: boolean;
}