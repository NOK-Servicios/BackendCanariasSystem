import { Injectable } from '@nestjs/common';
import { createClouseDto } from './dto/createClouseDto';

@Injectable()
export class clousuresRepository {
  findAll() {
    return 'Esta accion devuelve todos los cierres';
  }

  findById(id: string) {
    return `Esta accion devuelve un cierre`;
  }

  create(closure: createClouseDto) {
    return 'Esta accion crea un cirre';
  }

  findByStaffId(staffId: string) {
    return `Esta accion devuelve los cierres por id de staff`;
  }
}
