import { requestClient } from '#/api/request';

import * as API from './types';

export async function getDictionaries(
  params: API.DataDictionaryDictionariesUsingGetParams,
): Promise<API.PagedResultDto1DataDictionariesDto> {
  return requestClient.get(`/api/DataDictionary/Dictionaries`, { params });
}

export async function updateDictionaries(
  params: API.DataDictionaryDictionariesUsingPutParams,
  body: API.CreateUpdateDataDictionariesDto,
): Promise<API.DataDictionariesDto> {
  return requestClient.put(`/api/DataDictionary/Dictionaries`, body, {
    params,
  });
}

export async function createDictionarie(
  body: API.CreateUpdateDataDictionariesDto,
): Promise<API.DataDictionariesDto> {
  return requestClient.post(`/api/DataDictionary/Dictionaries`, body);
}

export async function deleteDictionaries(
  params: API.DataDictionaryDictionariesUsingDeleteParams,
) {
  return requestClient.delete(`/api/DataDictionary/Dictionaries`, { params });
}

export async function getDictionarie(
  params: API.DataDictionaryDictionariesIdUsingGetParams,
): Promise<API.DataDictionariesDto> {
  return requestClient.get(`/api/DataDictionary/Dictionaries/${params.id}`);
}

export async function getDictionariesChildren(
  params: API.DataDictionaryDictionariesChildrenUsingGetParams,
): Promise<API.DataDictionariesDto[]> {
  return requestClient.get(`/api/DataDictionary/Dictionaries/Children`, {
    params,
  });
}

export async function getDictionariesTree(
  params: API.DataDictionaryDictionariesTreeUsingGetParams,
): Promise<API.GetDataDictionariesForTreeOutput[]> {
  return requestClient.get(`/api/DataDictionary/Dictionaries/Tree`, { params });
}
