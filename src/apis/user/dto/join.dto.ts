import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export default class JoinDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  password!: string;

  @IsString()
  @IsNotEmpty()
  email!: string;

  @IsString()
  @IsNotEmpty()
  pw!: string;

  @IsNumber()
  @IsNotEmpty()
  permission!: number;
}
