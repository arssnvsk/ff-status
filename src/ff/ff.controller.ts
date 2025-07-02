import { Controller, Get, Param, Res } from '@nestjs/common';
import { FfService } from './ff.service';
import { join } from 'path';
import { Response } from 'express';

@Controller('ff')
export class FfController {
  constructor(private readonly ffService: FfService) {}

  @Get('image/:image')
  getFeatureFlagImage(@Param('image') image: number, @Res() res: Response) {
    const fileName = `${image}.png`;
    const filePath = join(process.cwd(), 'src', 'static', fileName);

    return res.sendFile(filePath);
  }

  @Get(':sandboxId/:ffId')
  async getFeatureFlag(
    @Param('sandboxId') sandboxId: number,
    @Param('ffId') ffId: string,
    @Res() res: Response,
  ) {
    const featureFlag = await this.ffService.findOne({ sandboxId, ffId });
    if (!featureFlag) {
      return res.sendStatus(404);
    }
    const fileName = featureFlag.enabled ? 'enabled.png' : 'disabled.png';
    const filePath = join(process.cwd(), 'src', 'static', fileName);

    return res.sendFile(filePath);
  }
}
