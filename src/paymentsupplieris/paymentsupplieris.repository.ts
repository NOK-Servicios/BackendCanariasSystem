import { Injectable } from '@nestjs/common';
import { createPaymentsupplierisDto } from './dto/createPaymentsupplierisDto';
import { UpdatePaymentsupplierisDto } from './dto/updatePaymentsupplierisDto';

@Injectable()
export class PaymentSupplierIsRepository {
  findAll(): string {
    return 'este metodo devuelve todos los pagos a proveedores';
  }
  findOne(id: string): string {
    return 'este metodo devuelve un pago a proveedor por su ID';
  }
  findBySupplierId(supplierId: string): string {
    return 'este metodo devuelve los pagos a proveedores por proveedor';
  }
  create(PaymentSupplieriData: createPaymentsupplierisDto): string {
    return 'este metodo crea un nuevo pago a proveedor';
  }
  update(id: string, PaymentSupplieriData: UpdatePaymentsupplierisDto): string {
    return 'este metodo actualiza un pago a proveedor por su ID';
  }
}
