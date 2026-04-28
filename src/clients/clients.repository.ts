import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/createClientDto';
import { UpdateClientDto } from './dto/updateClientDto';

@Injectable()
export class ClientsRepository {
  findAll() {
    return 'Esta accion retorna todos los clientes';
  }

  findOne(id: string) {
    return `Esta accion retorna un cliente`;
  }
  create(client: CreateClientDto) {
    return `Esta ccion crea un nuevo cliente`;
  }
  update(id: string, client: UpdateClientDto) {
    return `Esta accion actualiza la informacion de un cliente`;
  }
  delete(id: string) {
    return 'Esta accion elimina un cliente';
  }
}
