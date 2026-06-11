import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEstudianteDto {
  @IsNotEmpty()
  @IsString()
  nombre!: string;

  @IsNotEmpty()
  @IsString()
  codigo!: string;
}
