import * as API from './types';

export function displayLoginResultTypeEnum(field: API.LoginResultType) {
  return {
    1: 'NUMBER_1',
    2: 'NUMBER_2',
    3: 'NUMBER_3',
    4: 'NUMBER_4',
    5: 'NUMBER_5',
  }[field];
}
