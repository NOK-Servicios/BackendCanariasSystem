import { Controller, Get, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { CreateClientDto } from './dto/createClientDto';
import { ClientsService } from './clients.service';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) { }

  @Get()
  findAll() {
    return this.clientsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.clientsService.findOne(id);
  }

  @Post()
  create(client: CreateClientDto) {
    return this.clientsService.create(client);
  }

  @Post(':id')
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    client: CreateClientDto,
  ) {
    return this.clientsService.update(id, client);
  }
}
