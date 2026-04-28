import {
  IsString,
  IsEmail,
  IsDate,
  IsOptional,
  IsNumber,
} from 'class-validator';

export class UpdateClientDto {
  @IsString()
  @IsOptional()
  name: string | undefined;

  @IsString()
  @IsOptional()
  lastName: string | undefined;

  @IsNumber()
  @IsOptional()
  dni: number | undefined;

  @IsEmail()
  @IsOptional()
  email: string | undefined;

  @IsString()
  @IsOptional()
  role: string | undefined;

  @IsString()
  @IsOptional()
  adress: string | undefined;

  @IsDate()
  updatedAt: Date;
}
