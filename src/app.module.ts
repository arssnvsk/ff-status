import { Module } from '@nestjs/common';
import { FfModule } from './ff/ff.module';

@Module({
  imports: [FfModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
