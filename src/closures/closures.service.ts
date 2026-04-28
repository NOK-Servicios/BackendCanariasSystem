import { Injectable } from '@nestjs/common';
import { clousuresRepository } from './closures.repository';
import { createClouseDto } from './dto/createClouseDto';

@Injectable()
export class ClosuresService {
  constructor(private readonly clousuresRepository: clousuresRepository) {}

  createClosure(closure: createClouseDto) {
    return this.clousuresRepository.create(closure);
  }

  getClosures() {
    return this.clousuresRepository.findAll();
  }

  getClosureById(id: string) {
    return this.clousuresRepository.findById(id);
  }
}
