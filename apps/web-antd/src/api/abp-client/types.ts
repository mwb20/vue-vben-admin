export type AbpApiDefinitionUsingGetParams = {
  IncludeTypes?: boolean;
};

export type AbpApiDefinitionUsingGetResponses = {
  /**
   * OK
   */
  200: ApplicationApiDescriptionModel;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type AbpApplicationConfigurationUsingGetParams = {
  IncludeLocalizationResources?: boolean;
};

export type AbpApplicationConfigurationUsingGetResponses = {
  /**
   * OK
   */
  200: ApplicationConfigurationDto;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type AbpApplicationLocalizationUsingGetParams = {
  CultureName: string;
  OnlyDynamics?: boolean;
};

export type AbpApplicationLocalizationUsingGetResponses = {
  /**
   * OK
   */
  200: ApplicationLocalizationDto;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type AbpLoginResult = {
  description?: string;
  result?: LoginResultType;
};

export type AbpMultiTenancyTenantsByIdIdUsingGetParams = {
  id: string;
};

export type AbpMultiTenancyTenantsByIdIdUsingGetResponses = {
  /**
   * OK
   */
  200: FindTenantResultDto;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type AbpMultiTenancyTenantsByNameNameUsingGetParams = {
  name: string;
};

export type AbpMultiTenancyTenantsByNameNameUsingGetResponses = {
  /**
   * OK
   */
  200: FindTenantResultDto;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type AccountCheckPasswordUsingPostResponses = {
  /**
   * OK
   */
  200: AbpLoginResult;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type AccountDynamicClaimsRefreshUsingPostResponses = {
  /**
   * OK
   */
  200: unknown;
  /**
   * No Content
   */
  204: unknown;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type AccountLoginUsingPostResponses = {
  /**
   * OK
   */
  200: AbpLoginResult;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type AccountLogoutUsingGetResponses = {
  /**
   * OK
   */
  200: unknown;
  /**
   * No Content
   */
  204: unknown;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type AccountMyProfileChangePasswordUsingPostResponses = {
  /**
   * OK
   */
  200: unknown;
  /**
   * No Content
   */
  204: unknown;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type AccountMyProfileUsingGetResponses = {
  /**
   * OK
   */
  200: ProfileDto;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type AccountMyProfileUsingPutResponses = {
  /**
   * OK
   */
  200: ProfileDto;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type AccountRegisterUsingPostResponses = {
  /**
   * OK
   */
  200: IdentityUserDto;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type AccountResetPasswordUsingPostResponses = {
  /**
   * OK
   */
  200: unknown;
  /**
   * No Content
   */
  204: unknown;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type AccountSendPasswordResetCodeUsingPostResponses = {
  /**
   * OK
   */
  200: unknown;
  /**
   * No Content
   */
  204: unknown;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type AccountVerifyPasswordResetTokenUsingPostResponses = {
  /**
   * OK
   */
  200: boolean;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type ActionApiDescriptionModel = {
  allowAnonymous?: boolean;
  httpMethod?: string;
  implementFrom?: string;
  name?: string;
  parameters?: ParameterApiDescriptionModel[];
  parametersOnMethod?: MethodParameterApiDescriptionModel[];
  returnValue?: ReturnValueApiDescriptionModel;
  supportedVersions?: string[];
  uniqueName?: string;
  url?: string;
};

export type ApplicationApiDescriptionModel = {
  modules?: Record<string, ModuleApiDescriptionModel>;
  types?: Record<string, TypeApiDescriptionModel>;
};

export type ApplicationAuthConfigurationDto = {
  grantedPolicies?: Record<string, boolean>;
};

export type ApplicationConfigurationDto = {
  auth?: ApplicationAuthConfigurationDto;
  clock?: ClockDto;
  currentTenant?: CurrentTenantDto;
  currentUser?: CurrentUserDto;
  extraProperties?: Record<string, unknown>;
  features?: ApplicationFeatureConfigurationDto;
  globalFeatures?: ApplicationGlobalFeatureConfigurationDto;
  localization?: ApplicationLocalizationConfigurationDto;
  multiTenancy?: MultiTenancyInfoDto;
  objectExtensions?: ObjectExtensionsDto;
  setting?: ApplicationSettingConfigurationDto;
  timing?: TimingDto;
};

export type ApplicationFeatureConfigurationDto = {
  values?: Record<string, string>;
};

export type ApplicationGlobalFeatureConfigurationDto = {
  enabledFeatures?: string[];
};

export type ApplicationLocalizationConfigurationDto = {
  currentCulture?: CurrentCultureDto;
  defaultResourceName?: string;
  languageFilesMap?: Record<string, NameValue[]>;
  languages?: LanguageInfo[];
  languagesMap?: Record<string, NameValue[]>;
  resources?: Record<string, ApplicationLocalizationResourceDto>;
  values?: Record<string, Record<string, string>>;
};

export type ApplicationLocalizationDto = {
  currentCulture?: CurrentCultureDto;
  resources?: Record<string, ApplicationLocalizationResourceDto>;
};

export type ApplicationLocalizationResourceDto = {
  baseResources?: string[];
  texts?: Record<string, string>;
};

export type ApplicationSettingConfigurationDto = {
  values?: Record<string, string>;
};

export type ChangePasswordInput = {
  currentPassword?: string;
  newPassword: string;
};

export type ClockDto = {
  kind?: string;
};

export type ControllerApiDescriptionModel = {
  actions?: Record<string, ActionApiDescriptionModel>;
  apiVersion?: string;
  controllerGroupName?: string;
  controllerName?: string;
  interfaces?: ControllerInterfaceApiDescriptionModel[];
  isIntegrationService?: boolean;
  isRemoteService?: boolean;
  type?: string;
};

export type ControllerInterfaceApiDescriptionModel = {
  methods?: InterfaceMethodApiDescriptionModel[];
  name?: string;
  type?: string;
};

export type CreateUpdateDataDictionariesDto = {
  code?: string;
  description?: string;
  isActive?: boolean;
  name?: string;
  parentId?: string;
  sort?: number;
  value?: string;
};

export type CurrentCultureDto = {
  cultureName?: string;
  dateTimeFormat?: DateTimeFormatDto;
  displayName?: string;
  englishName?: string;
  isRightToLeft?: boolean;
  name?: string;
  nativeName?: string;
  threeLetterIsoLanguageName?: string;
  twoLetterIsoLanguageName?: string;
};

export type CurrentTenantDto = {
  id?: string;
  isAvailable?: boolean;
  name?: string;
};

export type CurrentUserDto = {
  email?: string;
  emailVerified?: boolean;
  id?: string;
  impersonatorTenantId?: string;
  impersonatorTenantName?: string;
  impersonatorUserId?: string;
  impersonatorUserName?: string;
  isAuthenticated?: boolean;
  name?: string;
  phoneNumber?: string;
  phoneNumberVerified?: boolean;
  roles?: string[];
  sessionId?: string;
  surName?: string;
  tenantId?: string;
  userName?: string;
};

export type DataDictionariesDto = {
  code?: string;
  creationTime?: string;
  creatorId?: string;
  description?: string;
  hasChildren?: boolean;
  id?: string;
  isActive?: boolean;
  lastModificationTime?: string;
  lastModifierId?: string;
  name?: string;
  parentId?: string;
  sort?: number;
  value?: string;
};

export type DataDictionaryDictionariesChildrenUsingGetParams = {
  parentId?: string;
};

export type DataDictionaryDictionariesChildrenUsingGetResponses = {
  /**
   * OK
   */
  200: DataDictionariesDto[];
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type DataDictionaryDictionariesIdUsingGetParams = {
  id: string;
};

export type DataDictionaryDictionariesIdUsingGetResponses = {
  /**
   * OK
   */
  200: DataDictionariesDto;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type DataDictionaryDictionariesTreeUsingGetParams = {
  code?: string;
};

export type DataDictionaryDictionariesTreeUsingGetResponses = {
  /**
   * OK
   */
  200: GetDataDictionariesForTreeOutput[];
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type DataDictionaryDictionariesUsingDeleteParams = {
  id?: string;
};

export type DataDictionaryDictionariesUsingDeleteResponses = {
  /**
   * OK
   */
  200: unknown;
  /**
   * No Content
   */
  204: unknown;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type DataDictionaryDictionariesUsingGetParams = {
  Filter?: string;
  MaxResultCount?: number;
  SkipCount?: number;
};

export type DataDictionaryDictionariesUsingGetResponses = {
  /**
   * OK
   */
  200: PagedResultDto1DataDictionariesDto;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type DataDictionaryDictionariesUsingPostResponses = {
  /**
   * OK
   */
  200: DataDictionariesDto;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type DataDictionaryDictionariesUsingPutParams = {
  id?: string;
};

export type DataDictionaryDictionariesUsingPutResponses = {
  /**
   * OK
   */
  200: DataDictionariesDto;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type DateTimeFormatDto = {
  calendarAlgorithmType?: string;
  dateSeparator?: string;
  dateTimeFormatLong?: string;
  fullDateTimePattern?: string;
  longTimePattern?: string;
  shortDatePattern?: string;
  shortTimePattern?: string;
};

export type EmailSettingsDto = {
  defaultFromAddress?: string;
  defaultFromDisplayName?: string;
  smtpDomain?: string;
  smtpEnableSsl?: boolean;
  smtpHost?: string;
  smtpPassword?: string;
  smtpPort?: number;
  smtpUseDefaultCredentials?: boolean;
  smtpUserName?: string;
};

export type EntityExtensionDto = {
  configuration?: Record<string, unknown>;
  properties?: Record<string, ExtensionPropertyDto>;
};

export type ExtensionEnumDto = {
  fields?: ExtensionEnumFieldDto[];
  localizationResource?: string;
};

export type ExtensionEnumFieldDto = {
  name?: string;
  value?: unknown;
};

export type ExtensionPropertyApiCreateDto = {
  isAvailable?: boolean;
};

export type ExtensionPropertyApiDto = {
  onCreate?: ExtensionPropertyApiCreateDto;
  onGet?: ExtensionPropertyApiGetDto;
  onUpdate?: ExtensionPropertyApiUpdateDto;
};

export type ExtensionPropertyApiGetDto = {
  isAvailable?: boolean;
};

export type ExtensionPropertyApiUpdateDto = {
  isAvailable?: boolean;
};

export type ExtensionPropertyAttributeDto = {
  config?: Record<string, unknown>;
  typeSimple?: string;
};

export type ExtensionPropertyDto = {
  api?: ExtensionPropertyApiDto;
  attributes?: ExtensionPropertyAttributeDto[];
  configuration?: Record<string, unknown>;
  defaultValue?: unknown;
  displayName?: LocalizableStringDto;
  policy?: ExtensionPropertyPolicyDto;
  type?: string;
  typeSimple?: string;
  ui?: ExtensionPropertyUiDto;
};

export type ExtensionPropertyFeaturePolicyDto = {
  features?: string[];
  requiresAll?: boolean;
};

export type ExtensionPropertyGlobalFeaturePolicyDto = {
  features?: string[];
  requiresAll?: boolean;
};

export type ExtensionPropertyPermissionPolicyDto = {
  permissionNames?: string[];
  requiresAll?: boolean;
};

export type ExtensionPropertyPolicyDto = {
  features?: ExtensionPropertyFeaturePolicyDto;
  globalFeatures?: ExtensionPropertyGlobalFeaturePolicyDto;
  permissions?: ExtensionPropertyPermissionPolicyDto;
};

export type ExtensionPropertyUiDto = {
  lookup?: ExtensionPropertyUiLookupDto;
  onCreateForm?: ExtensionPropertyUiFormDto;
  onEditForm?: ExtensionPropertyUiFormDto;
  onTable?: ExtensionPropertyUiTableDto;
};

export type ExtensionPropertyUiFormDto = {
  isVisible?: boolean;
};

export type ExtensionPropertyUiLookupDto = {
  displayPropertyName?: string;
  filterParamName?: string;
  resultListPropertyName?: string;
  url?: string;
  valuePropertyName?: string;
};

export type ExtensionPropertyUiTableDto = {
  isVisible?: boolean;
};

export type FeatureDto = {
  depth?: number;
  description?: string;
  displayName?: string;
  name?: string;
  parentName?: string;
  provider?: FeatureProviderDto;
  value?: string;
  valueType?: IStringValueType;
};

export type FeatureGroupDto = {
  displayName?: string;
  features?: FeatureDto[];
  name?: string;
};

export type FeatureManagementFeaturesUsingDeleteParams = {
  providerKey?: string;
  providerName?: string;
};

export type FeatureManagementFeaturesUsingDeleteResponses = {
  /**
   * OK
   */
  200: unknown;
  /**
   * No Content
   */
  204: unknown;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type FeatureManagementFeaturesUsingGetParams = {
  providerKey?: string;
  providerName?: string;
};

export type FeatureManagementFeaturesUsingGetResponses = {
  /**
   * OK
   */
  200: GetFeatureListResultDto;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type FeatureManagementFeaturesUsingPutParams = {
  providerKey?: string;
  providerName?: string;
};

export type FeatureManagementFeaturesUsingPutResponses = {
  /**
   * OK
   */
  200: unknown;
  /**
   * No Content
   */
  204: unknown;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type FeatureProviderDto = {
  key?: string;
  name?: string;
};

export type FindTenantResultDto = {
  isActive?: boolean;
  name?: string;
  normalizedName?: string;
  success?: boolean;
  tenantId?: string;
};

export type GetDataDictionariesForTreeOutput = {
  code?: string;
  hasChildren?: boolean;
  name?: string;
  value?: string;
};

export type GetFeatureListResultDto = {
  groups?: FeatureGroupDto[];
};

export type GetPermissionListResultDto = {
  entityDisplayName?: string;
  groups?: PermissionGroupDto[];
};

export type GetResourcePermissionDefinitionListResultDto = {
  permissions?: ResourcePermissionDefinitionDto[];
};

export type GetResourcePermissionListResultDto = {
  permissions?: ResourcePermissionGrantInfoDto[];
};

export type GetResourcePermissionWithProviderListResultDto = {
  permissions?: ResourcePermissionWithProdiverGrantInfoDto[];
};

export type GetResourceProviderListResultDto = {
  providers?: ResourceProviderDto[];
};

export type GrantedResourcePermissionDto = {
  displayName?: string;
  name?: string;
};

export type IanaTimeZone = {
  timeZoneName?: string;
};

export type IdentityRoleCreateDto = {
  extraProperties?: Record<string, unknown>;
  isDefault?: boolean;
  isPublic?: boolean;
  name: string;
};

export type IdentityRoleDto = {
  concurrencyStamp?: string;
  creationTime?: string;
  extraProperties?: Record<string, unknown>;
  id?: string;
  isDefault?: boolean;
  isPublic?: boolean;
  isStatic?: boolean;
  name?: string;
};

export type IdentityRolesAllUsingGetResponses = {
  /**
   * OK
   */
  200: ListResultDto1IdentityRoleDto;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type IdentityRolesIdUsingDeleteParams = {
  id: string;
};

export type IdentityRolesIdUsingDeleteResponses = {
  /**
   * OK
   */
  200: unknown;
  /**
   * No Content
   */
  204: unknown;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type IdentityRolesIdUsingGetParams = {
  id: string;
};

export type IdentityRolesIdUsingGetResponses = {
  /**
   * OK
   */
  200: IdentityRoleDto;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type IdentityRolesIdUsingPutParams = {
  id: string;
};

export type IdentityRolesIdUsingPutResponses = {
  /**
   * OK
   */
  200: IdentityRoleDto;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type IdentityRolesUsingGetParams = {
  ExtraProperties?: Record<string, unknown>;
  Filter?: string;
  MaxResultCount?: number;
  SkipCount?: number;
  Sorting?: string;
};

export type IdentityRolesUsingGetResponses = {
  /**
   * OK
   */
  200: PagedResultDto1IdentityRoleDto;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type IdentityRolesUsingPostResponses = {
  /**
   * OK
   */
  200: IdentityRoleDto;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type IdentityRoleUpdateDto = {
  concurrencyStamp?: string;
  extraProperties?: Record<string, unknown>;
  isDefault?: boolean;
  isPublic?: boolean;
  name: string;
};

export type IdentityUserCreateDto = {
  email: string;
  extraProperties?: Record<string, unknown>;
  isActive?: boolean;
  lockoutEnabled?: boolean;
  name?: string;
  password: string;
  phoneNumber?: string;
  roleNames?: string[];
  surname?: string;
  userName: string;
};

export type IdentityUserDto = {
  accessFailedCount?: number;
  concurrencyStamp?: string;
  creationTime?: string;
  creatorId?: string;
  deleterId?: string;
  deletionTime?: string;
  email?: string;
  emailConfirmed?: boolean;
  entityVersion?: number;
  extraProperties?: Record<string, unknown>;
  id?: string;
  isActive?: boolean;
  isDeleted?: boolean;
  lastModificationTime?: string;
  lastModifierId?: string;
  lastPasswordChangeTime?: string;
  lockoutEnabled?: boolean;
  lockoutEnd?: string;
  name?: string;
  phoneNumber?: string;
  phoneNumberConfirmed?: boolean;
  surname?: string;
  tenantId?: string;
  userName?: string;
};

export type IdentityUsersAssignableRolesUsingGetResponses = {
  /**
   * OK
   */
  200: ListResultDto1IdentityRoleDto;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type IdentityUsersByEmailEmailUsingGetParams = {
  email: string;
};

export type IdentityUsersByEmailEmailUsingGetResponses = {
  /**
   * OK
   */
  200: IdentityUserDto;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type IdentityUsersByUsernameUserNameUsingGetParams = {
  userName: string;
};

export type IdentityUsersByUsernameUserNameUsingGetResponses = {
  /**
   * OK
   */
  200: IdentityUserDto;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type IdentityUsersIdRolesUsingGetParams = {
  id: string;
};

export type IdentityUsersIdRolesUsingGetResponses = {
  /**
   * OK
   */
  200: ListResultDto1IdentityRoleDto;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type IdentityUsersIdRolesUsingPutParams = {
  id: string;
};

export type IdentityUsersIdRolesUsingPutResponses = {
  /**
   * OK
   */
  200: unknown;
  /**
   * No Content
   */
  204: unknown;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type IdentityUsersIdUsingDeleteParams = {
  id: string;
};

export type IdentityUsersIdUsingDeleteResponses = {
  /**
   * OK
   */
  200: unknown;
  /**
   * No Content
   */
  204: unknown;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type IdentityUsersIdUsingGetParams = {
  id: string;
};

export type IdentityUsersIdUsingGetResponses = {
  /**
   * OK
   */
  200: IdentityUserDto;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type IdentityUsersIdUsingPutParams = {
  id: string;
};

export type IdentityUsersIdUsingPutResponses = {
  /**
   * OK
   */
  200: IdentityUserDto;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type IdentityUsersLookupByUsernameUserNameUsingGetParams = {
  userName: string;
};

export type IdentityUsersLookupByUsernameUserNameUsingGetResponses = {
  /**
   * OK
   */
  200: UserData;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type IdentityUsersLookupCountUsingGetParams = {
  Filter?: string;
};

export type IdentityUsersLookupCountUsingGetResponses = {
  /**
   * OK
   */
  200: number;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type IdentityUsersLookupIdUsingGetParams = {
  id: string;
};

export type IdentityUsersLookupIdUsingGetResponses = {
  /**
   * OK
   */
  200: UserData;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type IdentityUsersLookupSearchUsingGetParams = {
  ExtraProperties?: Record<string, unknown>;
  Filter?: string;
  MaxResultCount?: number;
  SkipCount?: number;
  Sorting?: string;
};

export type IdentityUsersLookupSearchUsingGetResponses = {
  /**
   * OK
   */
  200: ListResultDto1UserData;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type IdentityUsersUsingGetParams = {
  ExtraProperties?: Record<string, unknown>;
  Filter?: string;
  MaxResultCount?: number;
  SkipCount?: number;
  Sorting?: string;
};

export type IdentityUsersUsingGetResponses = {
  /**
   * OK
   */
  200: PagedResultDto1IdentityUserDto;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type IdentityUsersUsingPostResponses = {
  /**
   * OK
   */
  200: IdentityUserDto;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type IdentityUserUpdateDto = {
  concurrencyStamp?: string;
  email: string;
  extraProperties?: Record<string, unknown>;
  isActive?: boolean;
  lockoutEnabled?: boolean;
  name?: string;
  password?: string;
  phoneNumber?: string;
  roleNames?: string[];
  surname?: string;
  userName: string;
};

export type IdentityUserUpdateRolesDto = {
  roleNames: string[];
};

export type InterfaceMethodApiDescriptionModel = {
  name?: string;
  parametersOnMethod?: MethodParameterApiDescriptionModel[];
  returnValue?: ReturnValueApiDescriptionModel;
};

export type IStringValueType = {
  name?: string;
  properties?: Record<string, unknown>;
  validator?: IValueValidator;
};

export type IValueValidator = {
  name?: string;
  properties?: Record<string, unknown>;
};

export type LanguageInfo = {
  cultureName?: string;
  displayName?: string;
  twoLetterISOLanguageName?: string;
  uiCultureName?: string;
};

export type ListResultDto1IdentityRoleDto = {
  items?: IdentityRoleDto[];
};

export type ListResultDto1UserData = {
  items?: UserData[];
};

export type LocalizableStringDto = {
  name?: string;
  resource?: string;
};

export enum LoginResultType {
  'NUMBER_1' = 1,
  'NUMBER_2' = 2,
  'NUMBER_3' = 3,
  'NUMBER_4' = 4,
  'NUMBER_5' = 5,
}

export type ILoginResultType = keyof typeof LoginResultType;

export type MethodParameterApiDescriptionModel = {
  defaultValue?: unknown;
  isOptional?: boolean;
  name?: string;
  type?: string;
  typeAsString?: string;
  typeSimple?: string;
};

export type ModuleApiDescriptionModel = {
  controllers?: Record<string, ControllerApiDescriptionModel>;
  remoteServiceName?: string;
  rootPath?: string;
};

export type ModuleExtensionDto = {
  configuration?: Record<string, unknown>;
  entities?: Record<string, EntityExtensionDto>;
};

export type MultiTenancyInfoDto = {
  isEnabled?: boolean;
};

export type MultiTenancyTenantsIdDefaultConnectionStringUsingDeleteParams = {
  id: string;
};

export type MultiTenancyTenantsIdDefaultConnectionStringUsingDeleteResponses = {
  /**
   * OK
   */
  200: unknown;
  /**
   * No Content
   */
  204: unknown;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type MultiTenancyTenantsIdDefaultConnectionStringUsingGetParams = {
  id: string;
};

export type MultiTenancyTenantsIdDefaultConnectionStringUsingGetResponses = {
  /**
   * OK
   */
  200: string;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type MultiTenancyTenantsIdDefaultConnectionStringUsingPutParams = {
  defaultConnectionString?: string;
  id: string;
};

export type MultiTenancyTenantsIdDefaultConnectionStringUsingPutResponses = {
  /**
   * OK
   */
  200: unknown;
  /**
   * No Content
   */
  204: unknown;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type MultiTenancyTenantsIdUsingDeleteParams = {
  id: string;
};

export type MultiTenancyTenantsIdUsingDeleteResponses = {
  /**
   * OK
   */
  200: unknown;
  /**
   * No Content
   */
  204: unknown;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type MultiTenancyTenantsIdUsingGetParams = {
  id: string;
};

export type MultiTenancyTenantsIdUsingGetResponses = {
  /**
   * OK
   */
  200: TenantDto;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type MultiTenancyTenantsIdUsingPutParams = {
  id: string;
};

export type MultiTenancyTenantsIdUsingPutResponses = {
  /**
   * OK
   */
  200: TenantDto;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type MultiTenancyTenantsUsingGetParams = {
  Filter?: string;
  MaxResultCount?: number;
  SkipCount?: number;
  Sorting?: string;
};

export type MultiTenancyTenantsUsingGetResponses = {
  /**
   * OK
   */
  200: PagedResultDto1TenantDto;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type MultiTenancyTenantsUsingPostResponses = {
  /**
   * OK
   */
  200: TenantDto;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type NameValue = {
  name?: string;
  value?: string;
};

export type ObjectExtensionsDto = {
  enums?: Record<string, ExtensionEnumDto>;
  modules?: Record<string, ModuleExtensionDto>;
};

export type PagedResultDto1DataDictionariesDto = {
  items?: DataDictionariesDto[];
  totalCount?: number;
};

export type PagedResultDto1IdentityRoleDto = {
  items?: IdentityRoleDto[];
  totalCount?: number;
};

export type PagedResultDto1IdentityUserDto = {
  items?: IdentityUserDto[];
  totalCount?: number;
};

export type PagedResultDto1TenantDto = {
  items?: TenantDto[];
  totalCount?: number;
};

export type ParameterApiDescriptionModel = {
  bindingSourceId?: string;
  constraintTypes?: string[];
  defaultValue?: unknown;
  descriptorName?: string;
  isOptional?: boolean;
  jsonName?: string;
  name?: string;
  nameOnMethod?: string;
  type?: string;
  typeSimple?: string;
};

export type PermissionGrantInfoDto = {
  allowedProviders?: string[];
  displayName?: string;
  grantedProviders?: ProviderInfoDto[];
  isGranted?: boolean;
  name?: string;
  parentName?: string;
};

export type PermissionGroupDto = {
  displayName?: string;
  displayNameKey?: string;
  displayNameResource?: string;
  name?: string;
  permissions?: PermissionGrantInfoDto[];
};

export type PermissionManagementPermissionsByGroupUsingGetParams = {
  groupName?: string;
  providerKey?: string;
  providerName?: string;
};

export type PermissionManagementPermissionsByGroupUsingGetResponses = {
  /**
   * OK
   */
  200: GetPermissionListResultDto;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type PermissionManagementPermissionsResourceByProviderUsingGetParams = {
  providerKey?: string;
  providerName?: string;
  resourceKey?: string;
  resourceName?: string;
};

export type PermissionManagementPermissionsResourceByProviderUsingGetResponses =
  {
    /**
     * OK
     */
    200: GetResourcePermissionWithProviderListResultDto;
    /**
     * Bad Request
     */
    400: RemoteServiceErrorResponse;
    /**
     * Unauthorized
     */
    401: RemoteServiceErrorResponse;
    /**
     * Forbidden
     */
    403: RemoteServiceErrorResponse;
    /**
     * Not Found
     */
    404: RemoteServiceErrorResponse;
    /**
     * Internal Server Error
     */
    500: RemoteServiceErrorResponse;
    /**
     * Not Implemented
     */
    501: RemoteServiceErrorResponse;
  };

export type PermissionManagementPermissionsResourceDefinitionsUsingGetParams = {
  resourceName?: string;
};

export type PermissionManagementPermissionsResourceDefinitionsUsingGetResponses =
  {
    /**
     * OK
     */
    200: GetResourcePermissionDefinitionListResultDto;
    /**
     * Bad Request
     */
    400: RemoteServiceErrorResponse;
    /**
     * Unauthorized
     */
    401: RemoteServiceErrorResponse;
    /**
     * Forbidden
     */
    403: RemoteServiceErrorResponse;
    /**
     * Not Found
     */
    404: RemoteServiceErrorResponse;
    /**
     * Internal Server Error
     */
    500: RemoteServiceErrorResponse;
    /**
     * Not Implemented
     */
    501: RemoteServiceErrorResponse;
  };

export type PermissionManagementPermissionsResourceProviderKeyLookupServicesUsingGetParams =
  {
    resourceName?: string;
  };

export type PermissionManagementPermissionsResourceProviderKeyLookupServicesUsingGetResponses =
  {
    /**
     * OK
     */
    200: GetResourceProviderListResultDto;
    /**
     * Bad Request
     */
    400: RemoteServiceErrorResponse;
    /**
     * Unauthorized
     */
    401: RemoteServiceErrorResponse;
    /**
     * Forbidden
     */
    403: RemoteServiceErrorResponse;
    /**
     * Not Found
     */
    404: RemoteServiceErrorResponse;
    /**
     * Internal Server Error
     */
    500: RemoteServiceErrorResponse;
    /**
     * Not Implemented
     */
    501: RemoteServiceErrorResponse;
  };

export type PermissionManagementPermissionsResourceUsingDeleteParams = {
  providerKey?: string;
  providerName?: string;
  resourceKey?: string;
  resourceName?: string;
};

export type PermissionManagementPermissionsResourceUsingDeleteResponses = {
  /**
   * OK
   */
  200: unknown;
  /**
   * No Content
   */
  204: unknown;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type PermissionManagementPermissionsResourceUsingGetParams = {
  resourceKey?: string;
  resourceName?: string;
};

export type PermissionManagementPermissionsResourceUsingGetResponses = {
  /**
   * OK
   */
  200: GetResourcePermissionListResultDto;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type PermissionManagementPermissionsResourceUsingPutParams = {
  resourceKey?: string;
  resourceName?: string;
};

export type PermissionManagementPermissionsResourceUsingPutResponses = {
  /**
   * OK
   */
  200: unknown;
  /**
   * No Content
   */
  204: unknown;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type PermissionManagementPermissionsSearchResourceProviderKeysUsingGetParams =
  {
    filter?: string;
    page?: number;
    resourceName?: string;
    serviceName?: string;
  };

export type PermissionManagementPermissionsSearchResourceProviderKeysUsingGetResponses =
  {
    /**
     * OK
     */
    200: SearchProviderKeyListResultDto;
    /**
     * Bad Request
     */
    400: RemoteServiceErrorResponse;
    /**
     * Unauthorized
     */
    401: RemoteServiceErrorResponse;
    /**
     * Forbidden
     */
    403: RemoteServiceErrorResponse;
    /**
     * Not Found
     */
    404: RemoteServiceErrorResponse;
    /**
     * Internal Server Error
     */
    500: RemoteServiceErrorResponse;
    /**
     * Not Implemented
     */
    501: RemoteServiceErrorResponse;
  };

export type PermissionManagementPermissionsUsingGetParams = {
  providerKey?: string;
  providerName?: string;
};

export type PermissionManagementPermissionsUsingGetResponses = {
  /**
   * OK
   */
  200: GetPermissionListResultDto;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type PermissionManagementPermissionsUsingPutParams = {
  providerKey?: string;
  providerName?: string;
};

export type PermissionManagementPermissionsUsingPutResponses = {
  /**
   * OK
   */
  200: unknown;
  /**
   * No Content
   */
  204: unknown;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type ProfileDto = {
  concurrencyStamp?: string;
  email?: string;
  extraProperties?: Record<string, unknown>;
  hasPassword?: boolean;
  isExternal?: boolean;
  name?: string;
  phoneNumber?: string;
  surname?: string;
  userName?: string;
};

export type PropertyApiDescriptionModel = {
  isNullable?: boolean;
  isRequired?: boolean;
  jsonName?: string;
  maximum?: string;
  maxLength?: number;
  minimum?: string;
  minLength?: number;
  name?: string;
  regex?: string;
  type?: string;
  typeSimple?: string;
};

export type ProviderInfoDto = {
  providerKey?: string;
  providerName?: string;
};

export type RegisterDto = {
  appName: string;
  emailAddress: string;
  extraProperties?: Record<string, unknown>;
  password: string;
  userName: string;
};

export type RemoteServiceErrorInfo = {
  code?: string;
  data?: Record<string, unknown>;
  details?: string;
  message?: string;
  validationErrors?: RemoteServiceValidationErrorInfo[];
};

export type RemoteServiceErrorResponse = {
  error?: RemoteServiceErrorInfo;
};

export type RemoteServiceValidationErrorInfo = {
  members?: string[];
  message?: string;
};

export type ResetPasswordDto = {
  password: string;
  resetToken: string;
  userId?: string;
};

export type ResourcePermissionDefinitionDto = {
  displayName?: string;
  name?: string;
};

export type ResourcePermissionGrantInfoDto = {
  permissions?: GrantedResourcePermissionDto[];
  providerDisplayName?: string;
  providerKey?: string;
  providerName?: string;
  providerNameDisplayName?: string;
};

export type ResourcePermissionWithProdiverGrantInfoDto = {
  displayName?: string;
  isGranted?: boolean;
  name?: string;
  providers?: string[];
};

export type ResourceProviderDto = {
  displayName?: string;
  name?: string;
};

export type ReturnValueApiDescriptionModel = {
  type?: string;
  typeSimple?: string;
};

export type SearchProviderKeyInfo = {
  providerDisplayName?: string;
  providerKey?: string;
};

export type SearchProviderKeyListResultDto = {
  keys?: SearchProviderKeyInfo[];
};

export type SendPasswordResetCodeDto = {
  appName: string;
  email: string;
  returnUrl?: string;
  returnUrlHash?: string;
};

export type SendTestEmailInput = {
  body?: string;
  senderEmailAddress: string;
  subject: string;
  targetEmailAddress: string;
};

export type SettingManagementEmailingSendTestEmailUsingPostResponses = {
  /**
   * OK
   */
  200: unknown;
  /**
   * No Content
   */
  204: unknown;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type SettingManagementEmailingUsingGetResponses = {
  /**
   * OK
   */
  200: EmailSettingsDto;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type SettingManagementEmailingUsingPostResponses = {
  /**
   * OK
   */
  200: unknown;
  /**
   * No Content
   */
  204: unknown;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type SettingManagementTimezoneTimezonesUsingGetResponses = {
  /**
   * OK
   */
  200: NameValue[];
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type SettingManagementTimezoneUsingGetResponses = {
  /**
   * OK
   */
  200: string;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type SettingManagementTimezoneUsingPostParams = {
  timezone?: string;
};

export type SettingManagementTimezoneUsingPostResponses = {
  /**
   * OK
   */
  200: unknown;
  /**
   * No Content
   */
  204: unknown;
  /**
   * Bad Request
   */
  400: RemoteServiceErrorResponse;
  /**
   * Unauthorized
   */
  401: RemoteServiceErrorResponse;
  /**
   * Forbidden
   */
  403: RemoteServiceErrorResponse;
  /**
   * Not Found
   */
  404: RemoteServiceErrorResponse;
  /**
   * Internal Server Error
   */
  500: RemoteServiceErrorResponse;
  /**
   * Not Implemented
   */
  501: RemoteServiceErrorResponse;
};

export type TenantCreateDto = {
  adminEmailAddress: string;
  adminPassword: string;
  extraProperties?: Record<string, unknown>;
  name: string;
};

export type TenantDto = {
  concurrencyStamp?: string;
  extraProperties?: Record<string, unknown>;
  id?: string;
  name?: string;
};

export type TenantUpdateDto = {
  concurrencyStamp?: string;
  extraProperties?: Record<string, unknown>;
  name: string;
};

export type TimeZone = {
  iana?: IanaTimeZone;
  windows?: WindowsTimeZone;
};

export type TimingDto = {
  timeZone?: TimeZone;
};

export type TypeApiDescriptionModel = {
  baseType?: string;
  enumNames?: string[];
  enumValues?: unknown[];
  genericArguments?: string[];
  isEnum?: boolean;
  properties?: PropertyApiDescriptionModel[];
};

export type UpdateEmailSettingsDto = {
  defaultFromAddress: string;
  defaultFromDisplayName: string;
  smtpDomain?: string;
  smtpEnableSsl?: boolean;
  smtpHost?: string;
  smtpPassword?: string;
  smtpPort?: number;
  smtpUseDefaultCredentials?: boolean;
  smtpUserName?: string;
};

export type UpdateFeatureDto = {
  name?: string;
  value?: string;
};

export type UpdateFeaturesDto = {
  features?: UpdateFeatureDto[];
};

export type UpdatePermissionDto = {
  isGranted?: boolean;
  name?: string;
};

export type UpdatePermissionsDto = {
  permissions?: UpdatePermissionDto[];
};

export type UpdateProfileDto = {
  concurrencyStamp?: string;
  email?: string;
  extraProperties?: Record<string, unknown>;
  name?: string;
  phoneNumber?: string;
  surname?: string;
  userName?: string;
};

export type UpdateResourcePermissionsDto = {
  permissions?: string[];
  providerKey?: string;
  providerName?: string;
};

export type UserData = {
  email?: string;
  emailConfirmed?: boolean;
  extraProperties?: Record<string, unknown>;
  id?: string;
  isActive?: boolean;
  name?: string;
  phoneNumber?: string;
  phoneNumberConfirmed?: boolean;
  surname?: string;
  tenantId?: string;
  userName?: string;
};

export type UserLoginInfo = {
  password: string;
  rememberMe?: boolean;
  userNameOrEmailAddress: string;
};

export type VerifyPasswordResetTokenInput = {
  resetToken: string;
  userId?: string;
};

export type WindowsTimeZone = {
  timeZoneId?: string;
};
