import {
  IsString,
  IsEmail,
  MinLength,
  MaxLength,
  IsNumber,
  IsDate,
  IsEnum,
} from 'class-validator';

export enum ClientStatus {
  ACTIVE = 'ACTIVE', // Cliente vigente, con operaciones en curso
  INACTIVE = 'INACTIVE', // Cliente registrado pero sin actividad
  PENDING = 'PENDING', // Cliente en proceso de alta o validación
  SUSPENDED = 'SUSPENDED', // Cliente bloqueado temporalmente (ej. por deuda)
  CLOSED = 'CLOSED', // Cliente dado de baja definitiva
  DELINQUENT = 'DELINQUENT', // Cliente con deuda vencida
}

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

  @IsDate()
  createdAt: Date;

  @IsEnum(ClientStatus)
  status: ClientStatus;
}
