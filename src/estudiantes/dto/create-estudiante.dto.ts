import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEstudianteDto {
  @ApiProperty({ example: 'Juan Perez', description: 'Nombre completo del estudiante' })
  @IsNotEmpty()
  @IsString()
  nombre!: string;

  @ApiProperty({ example: '2024001', description: 'Código único del estudiante' })
  @IsNotEmpty()
  @IsString()
  codigo!: string;
}
