import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { FeatureFlag, FeatureFlagResponse } from './types';

@Injectable()
export class FFRepository {
  constructor(private readonly httpService: HttpService) {}
  async getBySandboxAndFlagId(
    sandboxId: number,
    ffId: string,
  ): Promise<FeatureFlag | undefined> {
    const sandboxURL = `http://beta-0${sandboxId}.b2bdev.pro`;
    const apiURL = `${sandboxURL}/_cms_api/items/feature_flags`;

    try {
      const response = await firstValueFrom<FeatureFlagResponse>(
        this.httpService.get(apiURL, {
          params: {
            limit: 10000,
          },
        }),
      );

      console.log(response.data.data);
      return response.data.data.find(
        (featureFlag) => featureFlag.name === ffId,
      );
    } catch {
      throw new Error(`Failed to fetch feature flag`);
    }
  }
}
