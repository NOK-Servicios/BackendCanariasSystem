import { Injectable } from '@nestjs/common';
import { InstallmentsRepository } from './installments.repository';

@Injectable()
export class InstallmentsService {
  constructor(
    private readonly installmentsRepository: InstallmentsRepository,
  ) {}
  getAllInstallmentsService() {
    return this.installmentsRepository.getAllInstallments();
  }
  getInstallmentByIdService(id: string) {
    return this.installmentsRepository.getInstallmentById(id);
  }
  getinstallmentBySaleIdService(saleId: string) {
    return this.installmentsRepository.getinstallmentBySaleId(saleId);
  }
  getinstallmentByClientIdService(clientId: string) {
    return this.installmentsRepository.getinstallmentByClientId(clientId);
  }
  updateInstallmentService(id: string, updateInstallment: any) {
    return this.installmentsRepository.updateInstallment(id, updateInstallment);
  }
  createInstallmentService(createInstallment: any) {
    return this.installmentsRepository.createInstallment(createInstallment);
  }
}
