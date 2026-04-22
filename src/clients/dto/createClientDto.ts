import {
  IsString,
  IsEmail,
  MinLength,
  MaxLength,
  IsNumber,
  IsDate,
} from 'class-validator';

export class CreateClientDto {
  @IsString()
  @MinLength(3)
  @MaxLength(80)
  name: string;

  @IsString()
  lastName: string;

  @IsNumber()
  dni: number | undefined;

  @IsEmail()
  email: string | undefined;

  @IsString()
  role: string | undefined;

  @IsString()
  adress: string | undefined;

  @IsString()
  DniImage: string | undefined;

  @IsString()
  ServiceImage: string | undefined;
}
