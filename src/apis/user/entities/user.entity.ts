import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export default class User {
  @PrimaryGeneratedColumn({
    name: 'idx',
  })
  idx: number;

  //이름
  @Column({
    name: 'name',
    nullable: false,
  })
  name!: string;

  //패스워드
  @Column({
    name: 'pw',
  })
  pw!: string;

  //이메일
  @Column({
    name: 'email',
    nullable: false,
  })
  email!: string;

  //역할 - 0:학생, 1:학부모, 2:교직원
  @Column({
    name: 'permission',
  })
  permission!: number;

  //소개글
  @Column({
    name: 'introduction',
  })
  introduction!: string;

  //프로필 이미지
  @Column({
    name: 'avatar',
    nullable: true,
  })
  avatar?: string;

  //학반번호 테이블 조인
}
