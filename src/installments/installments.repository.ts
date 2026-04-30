import { Injectable } from '@nestjs/common';

@Injectable()
export class InstallmentsRepository {
  getAllInstallments() {
    return 'este metodo devuelve todas las cuotas de todos los clientes';
  }
  getInstallmentById(id: string) {
    return 'este metodo devuelve una cuota específica';
  }
  getinstallmentBySaleId(saleId: string) {
    return 'este metodo devuelve las cuotas de una compra puntual';
  }
  getinstallmentByClientId(clientId: string) {
    return 'este metodo devuelve las cuotas de un cliente';
  }
  createInstallment(createInstallment: any) {
    return 'este metodo crea una cuota automáticamente al generar la compra con plan de pagos';
  }
  updateInstallment(id: string, updateInstallment: any) {
    return 'este metodo actualiza el estado de una cuota específica (pago)';
  }
}
