import { createClouseDto } from './dto/createClouseDto';

export class clousuresRepository {
  create(closure: createClouseDto) {
    return 'Esta accion crea un cirre';
  }
  findAll() {
    return 'Esta accion devuelve todos los cierres';
  }

  findById(id: string) {
    return `Esta accion devuelve un cierre`;
  }
}
