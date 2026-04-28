import { Controller, Get, Post, Put } from '@nestjs/common';
import { InstallmentsService } from './installments.service';

@Controller('installments')
export class InstallmentsController {
  constructor(private readonly installmentsService: InstallmentsService) {}

  @Get()
  getAllInstallments() {
    return this.installmentsService.getAllInstallmentsService();
  }

  @Get(':id')
  getInstallmentById(id: string) {
    return this.installmentsService.getInstallmentByIdService(id);
  }

  @Get(':saleId')
  getinstallmentBySaleId(saleId: string) {
    return this.installmentsService.getinstallmentBySaleIdService(saleId);
  }

  @Get(':clientId')
  getinstallmentByClientId(clientId: string) {
    return this.installmentsService.getinstallmentByClientIdService(clientId);
  }

  @Post()
  createInstallment(createInstallment: any) {
    return this.installmentsService.createInstallmentService(createInstallment);
  }

  @Put(':id')
  updateInstallment(id: string, updateInstallment: any) {
    return this.installmentsService.updateInstallmentService(
      id,
      updateInstallment,
    );
  }
}
