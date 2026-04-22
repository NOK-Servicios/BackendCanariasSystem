import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/createClientDto';
import { UpdateClientDto } from './dto/updateClientDto';

@Injectable()
export class ClientsService {
  findAll() {
    return 'This action returns all clients';
  }

  findOne(id: string) {
    return `This action returns the client with id: ${id}`;
  }
  create(client: CreateClientDto) {
    return `This action adds a new client: ${client.name}`;
  }
  update(id: string, client: UpdateClientDto) {
    return `This action updates the client with id: ${id} and name: ${client.name}`;
  }
}
