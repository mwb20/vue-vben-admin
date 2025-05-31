// 返回列表结果基类
export interface BaseListResult<T> {
  totalCount: number;
  items: T[];
}
// 扩展属性
export interface ExtraProperties {
  [key: string]: string; // 动态的键值对，键为字符串，值为字符串
}
