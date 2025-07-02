import { Module } from '@nestjs/common';
import { FfService } from './ff.service';
import { FfController } from './ff.controller';
import { FFRepository } from './FFRepository';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [FfController],
  providers: [FfService, FFRepository],
})
export class FfModule {}
