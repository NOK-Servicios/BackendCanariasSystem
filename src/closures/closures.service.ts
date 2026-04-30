import { Injectable } from '@nestjs/common';
import { clousuresRepository } from './closures.repository';
import { createClouseDto } from './dto/createClouseDto';

@Injectable()
export class ClosuresService {
  constructor(private readonly clousuresRepository: clousuresRepository) {}

  createClosureService(closure: createClouseDto) {
    return this.clousuresRepository.create(closure);
  }

  getClosuresService() {
    return this.clousuresRepository.findAll();
  }

  getClosureByIdService(id: string) {
    return this.clousuresRepository.findById(id);
  }

  getClosuresByStaffIdService(staffId: string) {
    return this.clousuresRepository.findByStaffId(staffId);
  }
}
