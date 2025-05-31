// 获取分页数据入参
export interface QueryPageInput {
  filter: null | string;
  sorting: null | string;
  skipCount: number;
  maxResultCount: number;
}
