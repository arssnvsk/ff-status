import { Injectable } from '@nestjs/common';
import { FFRepository } from './FFRepository';

@Injectable()
export class FfService {
  constructor(private readonly featureFlagRepository: FFRepository) {}

  findOne({ sandboxId, ffId }: { sandboxId: number; ffId: string }) {
    return this.featureFlagRepository.getBySandboxAndFlagId(sandboxId, ffId);
  }
}
