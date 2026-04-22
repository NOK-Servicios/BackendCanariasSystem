import { IsUUID, IsDateString, IsNumber, IsEnum, Min } from 'class-validator';

export enum CashboxStatus {
  OPEN = 'abierta',
  CLOSED = 'cerrada',
}

export class UpdateCashboxDto {
  @IsUUID()
  id: string;

  @IsDateString()
  date: string; // fecha de apertura/cierre

  @IsNumber()
  @Min(0)
  opening_balance: number;

  @IsNumber()
  @Min(0)
  closing_balance: number;

  @IsEnum(CashboxStatus)
  status: CashboxStatus;
}
