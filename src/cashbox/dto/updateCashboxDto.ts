import { IsUUID, IsDateString, IsNumber, IsEnum, Min } from 'class-validator';

export enum CashboxStatus {
  OPEN = 'abierta',
  CLOSED = 'cerrada',
}

export class AddCashboxDto {
  @IsUUID()
  id: string;

  @IsDateString()
  date: string; // fecha de apertura/cierre

  @IsNumber()
  @Min(0)
  openingBalance: number;

  @IsNumber()
  @Min(0)
  closingBalance: number;

  @IsEnum(CashboxStatus)
  status: CashboxStatus;
}
