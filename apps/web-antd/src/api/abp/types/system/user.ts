import type { BaseListResult, ExtraProperties } from '../base_result';

interface User {
  extraProperties: ExtraProperties;
  id: string;
  creationTime: string; // ISO 8601 格式的时间字符串
  creatorId: string;
  lastModificationTime: string; // ISO 8601 格式的时间字符串
  lastModifierId: string;
  isDeleted: boolean;
  deleterId: string;
  deletionTime: null | string; // 可为 null，表示未删除
  tenantId: string;
  userName: string;
  name: string;
  surname: string;
  email: string;
  emailConfirmed: boolean;
  phoneNumber: string;
  phoneNumberConfirmed: boolean;
  isActive: boolean;
  lockoutEnabled: boolean;
  accessFailedCount: number;
  lockoutEnd: null | string; // 可为 null，表示未锁定
  concurrencyStamp: string;
  entityVersion: number;
  lastPasswordChangeTime: string; // ISO 8601 格式的时间字符串
}

export type UserListResult = BaseListResult<User>;
