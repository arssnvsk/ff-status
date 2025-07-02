export type FeatureFlag = {
  name: string;
  enabled: boolean;
};

export type FeatureFlagResponse = {
  data: {
    data: FeatureFlag[];
  };
};