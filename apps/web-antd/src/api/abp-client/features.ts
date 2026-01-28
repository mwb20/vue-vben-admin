import { requestClient } from '#/api/request';

import * as API from './types';

export async function getFeatures(
  params: API.FeatureManagementFeaturesUsingGetParams
): Promise<API.GetFeatureListResultDto> {
  return requestClient.get(`/api/feature-management/features`, { params });
}

export async function updateFeatures(
  params: API.FeatureManagementFeaturesUsingPutParams,
  body: API.UpdateFeaturesDto
) {
  return requestClient.put(`/api/feature-management/features`, body);
}

export async function deleteFeatures(
  params: API.FeatureManagementFeaturesUsingDeleteParams
) {
  return requestClient.delete(`/api/feature-management/features`, null, {
    params,
  });
}
