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
  result?: LoginResultType;
  description?: string;
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
  uniqueName?: string;
  name?: string;
  httpMethod?: string;
  url?: string;
  supportedVersions?: string[];
  parametersOnMethod?: MethodParameterApiDescriptionModel[];
  parameters?: ParameterApiDescriptionModel[];
  returnValue?: ReturnValueApiDescriptionModel;
  allowAnonymous?: boolean;
  implementFrom?: string;
};

export type ApplicationApiDescriptionModel = {
  modules?: Record<string, ModuleApiDescriptionModel>;
  types?: Record<string, TypeApiDescriptionModel>;
};

export type ApplicationAuthConfigurationDto = {
  grantedPolicies?: Record<string, boolean>;
};

export type ApplicationConfigurationDto = {
  localization?: ApplicationLocalizationConfigurationDto;
  auth?: ApplicationAuthConfigurationDto;
  setting?: ApplicationSettingConfigurationDto;
  currentUser?: CurrentUserDto;
  features?: ApplicationFeatureConfigurationDto;
  globalFeatures?: ApplicationGlobalFeatureConfigurationDto;
  multiTenancy?: MultiTenancyInfoDto;
  currentTenant?: CurrentTenantDto;
  timing?: TimingDto;
  clock?: ClockDto;
  objectExtensions?: ObjectExtensionsDto;
  extraProperties?: Record<string, unknown>;
};

export type ApplicationFeatureConfigurationDto = {
  values?: Record<string, string>;
};

export type ApplicationGlobalFeatureConfigurationDto = {
  enabledFeatures?: string[];
};

export type ApplicationLocalizationConfigurationDto = {
  values?: Record<string, Record<string, string>>;
  resources?: Record<string, ApplicationLocalizationResourceDto>;
  languages?: LanguageInfo[];
  currentCulture?: CurrentCultureDto;
  defaultResourceName?: string;
  languagesMap?: Record<string, NameValue[]>;
  languageFilesMap?: Record<string, NameValue[]>;
};

export type ApplicationLocalizationDto = {
  resources?: Record<string, ApplicationLocalizationResourceDto>;
  currentCulture?: CurrentCultureDto;
};

export type ApplicationLocalizationResourceDto = {
  texts?: Record<string, string>;
  baseResources?: string[];
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
  controllerName?: string;
  controllerGroupName?: string;
  isRemoteService?: boolean;
  isIntegrationService?: boolean;
  apiVersion?: string;
  type?: string;
  interfaces?: ControllerInterfaceApiDescriptionModel[];
  actions?: Record<string, ActionApiDescriptionModel>;
};

export type ControllerInterfaceApiDescriptionModel = {
  type?: string;
  name?: string;
  methods?: InterfaceMethodApiDescriptionModel[];
};

export type CreateUpdateDataDictionariesDto = {
  parentId?: string;
  code?: string;
  name?: string;
  value?: string;
  sort?: number;
  isActive?: boolean;
  description?: string;
};

export type CurrentCultureDto = {
  displayName?: string;
  englishName?: string;
  threeLetterIsoLanguageName?: string;
  twoLetterIsoLanguageName?: string;
  isRightToLeft?: boolean;
  cultureName?: string;
  name?: string;
  nativeName?: string;
  dateTimeFormat?: DateTimeFormatDto;
};

export type CurrentTenantDto = {
  id?: string;
  name?: string;
  isAvailable?: boolean;
};

export type CurrentUserDto = {
  isAuthenticated?: boolean;
  id?: string;
  tenantId?: string;
  impersonatorUserId?: string;
  impersonatorTenantId?: string;
  impersonatorUserName?: string;
  impersonatorTenantName?: string;
  userName?: string;
  name?: string;
  surName?: string;
  email?: string;
  emailVerified?: boolean;
  phoneNumber?: string;
  phoneNumberVerified?: boolean;
  roles?: string[];
  sessionId?: string;
};

export type DataDictionariesDto = {
  id?: string;
  creationTime?: string;
  creatorId?: string;
  lastModificationTime?: string;
  lastModifierId?: string;
  parentId?: string;
  code?: string;
  name?: string;
  value?: string;
  sort?: number;
  isActive?: boolean;
  hasChildren?: boolean;
  description?: string;
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
  SkipCount?: number;
  MaxResultCount?: number;
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
  dateTimeFormatLong?: string;
  shortDatePattern?: string;
  fullDateTimePattern?: string;
  dateSeparator?: string;
  shortTimePattern?: string;
  longTimePattern?: string;
};

export type EmailSettingsDto = {
  smtpHost?: string;
  smtpPort?: number;
  smtpUserName?: string;
  smtpPassword?: string;
  smtpDomain?: string;
  smtpEnableSsl?: boolean;
  smtpUseDefaultCredentials?: boolean;
  defaultFromAddress?: string;
  defaultFromDisplayName?: string;
};

export type EntityExtensionDto = {
  properties?: Record<string, ExtensionPropertyDto>;
  configuration?: Record<string, unknown>;
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
  onGet?: ExtensionPropertyApiGetDto;
  onCreate?: ExtensionPropertyApiCreateDto;
  onUpdate?: ExtensionPropertyApiUpdateDto;
};

export type ExtensionPropertyApiGetDto = {
  isAvailable?: boolean;
};

export type ExtensionPropertyApiUpdateDto = {
  isAvailable?: boolean;
};

export type ExtensionPropertyAttributeDto = {
  typeSimple?: string;
  config?: Record<string, unknown>;
};

export type ExtensionPropertyDto = {
  type?: string;
  typeSimple?: string;
  displayName?: LocalizableStringDto;
  api?: ExtensionPropertyApiDto;
  ui?: ExtensionPropertyUiDto;
  policy?: ExtensionPropertyPolicyDto;
  attributes?: ExtensionPropertyAttributeDto[];
  configuration?: Record<string, unknown>;
  defaultValue?: unknown;
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
  globalFeatures?: ExtensionPropertyGlobalFeaturePolicyDto;
  features?: ExtensionPropertyFeaturePolicyDto;
  permissions?: ExtensionPropertyPermissionPolicyDto;
};

export type ExtensionPropertyUiDto = {
  onTable?: ExtensionPropertyUiTableDto;
  onCreateForm?: ExtensionPropertyUiFormDto;
  onEditForm?: ExtensionPropertyUiFormDto;
  lookup?: ExtensionPropertyUiLookupDto;
};

export type ExtensionPropertyUiFormDto = {
  isVisible?: boolean;
};

export type ExtensionPropertyUiLookupDto = {
  url?: string;
  resultListPropertyName?: string;
  displayPropertyName?: string;
  valuePropertyName?: string;
  filterParamName?: string;
};

export type ExtensionPropertyUiTableDto = {
  isVisible?: boolean;
};

export type FeatureDto = {
  name?: string;
  displayName?: string;
  value?: string;
  provider?: FeatureProviderDto;
  description?: string;
  valueType?: IStringValueType;
  depth?: number;
  parentName?: string;
};

export type FeatureGroupDto = {
  name?: string;
  displayName?: string;
  features?: FeatureDto[];
};

export type FeatureManagementFeaturesUsingDeleteParams = {
  providerName?: string;
  providerKey?: string;
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
  providerName?: string;
  providerKey?: string;
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
  providerName?: string;
  providerKey?: string;
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
  name?: string;
  key?: string;
};

export type FindTenantResultDto = {
  success?: boolean;
  tenantId?: string;
  name?: string;
  normalizedName?: string;
  isActive?: boolean;
};

export type GetDataDictionariesForTreeOutput = {
  code?: string;
  name?: string;
  value?: string;
  hasChildren?: boolean;
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
  name?: string;
  displayName?: string;
};

export type IanaTimeZone = {
  timeZoneName?: string;
};

export type IdentityRoleCreateDto = {
  extraProperties?: Record<string, unknown>;
  name: string;
  isDefault?: boolean;
  isPublic?: boolean;
};

export type IdentityRoleDto = {
  extraProperties?: Record<string, unknown>;
  id?: string;
  name?: string;
  isDefault?: boolean;
  isStatic?: boolean;
  isPublic?: boolean;
  concurrencyStamp?: string;
  creationTime?: string;
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
  Filter?: string;
  Sorting?: string;
  SkipCount?: number;
  MaxResultCount?: number;
  ExtraProperties?: Record<string, unknown>;
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
  extraProperties?: Record<string, unknown>;
  name: string;
  isDefault?: boolean;
  isPublic?: boolean;
  concurrencyStamp?: string;
};

export type IdentityUserCreateDto = {
  extraProperties?: Record<string, unknown>;
  userName: string;
  name?: string;
  surname?: string;
  email: string;
  phoneNumber?: string;
  isActive?: boolean;
  lockoutEnabled?: boolean;
  roleNames?: string[];
  password: string;
};

export type IdentityUserDto = {
  extraProperties?: Record<string, unknown>;
  id?: string;
  creationTime?: string;
  creatorId?: string;
  lastModificationTime?: string;
  lastModifierId?: string;
  isDeleted?: boolean;
  deleterId?: string;
  deletionTime?: string;
  tenantId?: string;
  userName?: string;
  name?: string;
  surname?: string;
  email?: string;
  emailConfirmed?: boolean;
  phoneNumber?: string;
  phoneNumberConfirmed?: boolean;
  isActive?: boolean;
  lockoutEnabled?: boolean;
  accessFailedCount?: number;
  lockoutEnd?: string;
  concurrencyStamp?: string;
  entityVersion?: number;
  lastPasswordChangeTime?: string;
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
  Filter?: string;
  Sorting?: string;
  SkipCount?: number;
  MaxResultCount?: number;
  ExtraProperties?: Record<string, unknown>;
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
  Filter?: string;
  Sorting?: string;
  SkipCount?: number;
  MaxResultCount?: number;
  ExtraProperties?: Record<string, unknown>;
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
  extraProperties?: Record<string, unknown>;
  userName: string;
  name?: string;
  surname?: string;
  email: string;
  phoneNumber?: string;
  isActive?: boolean;
  lockoutEnabled?: boolean;
  roleNames?: string[];
  password?: string;
  concurrencyStamp?: string;
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
  uiCultureName?: string;
  displayName?: string;
  twoLetterISOLanguageName?: string;
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
  name?: string;
  typeAsString?: string;
  type?: string;
  typeSimple?: string;
  isOptional?: boolean;
  defaultValue?: unknown;
};

export type ModuleApiDescriptionModel = {
  rootPath?: string;
  remoteServiceName?: string;
  controllers?: Record<string, ControllerApiDescriptionModel>;
};

export type ModuleExtensionDto = {
  entities?: Record<string, EntityExtensionDto>;
  configuration?: Record<string, unknown>;
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
  id: string;
  defaultConnectionString?: string;
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
  Sorting?: string;
  SkipCount?: number;
  MaxResultCount?: number;
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
  modules?: Record<string, ModuleExtensionDto>;
  enums?: Record<string, ExtensionEnumDto>;
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
  nameOnMethod?: string;
  name?: string;
  jsonName?: string;
  type?: string;
  typeSimple?: string;
  isOptional?: boolean;
  defaultValue?: unknown;
  constraintTypes?: string[];
  bindingSourceId?: string;
  descriptorName?: string;
};

export type PermissionGrantInfoDto = {
  name?: string;
  displayName?: string;
  parentName?: string;
  isGranted?: boolean;
  allowedProviders?: string[];
  grantedProviders?: ProviderInfoDto[];
};

export type PermissionGroupDto = {
  name?: string;
  displayName?: string;
  displayNameKey?: string;
  displayNameResource?: string;
  permissions?: PermissionGrantInfoDto[];
};

export type PermissionManagementPermissionsByGroupUsingGetParams = {
  groupName?: string;
  providerName?: string;
  providerKey?: string;
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
  resourceName?: string;
  resourceKey?: string;
  providerName?: string;
  providerKey?: string;
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
  resourceName?: string;
  resourceKey?: string;
  providerName?: string;
  providerKey?: string;
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
  resourceName?: string;
  resourceKey?: string;
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
  resourceName?: string;
  resourceKey?: string;
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
    resourceName?: string;
    serviceName?: string;
    filter?: string;
    page?: number;
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
  providerName?: string;
  providerKey?: string;
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
  providerName?: string;
  providerKey?: string;
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
  extraProperties?: Record<string, unknown>;
  userName?: string;
  email?: string;
  name?: string;
  surname?: string;
  phoneNumber?: string;
  isExternal?: boolean;
  hasPassword?: boolean;
  concurrencyStamp?: string;
};

export type PropertyApiDescriptionModel = {
  name?: string;
  jsonName?: string;
  type?: string;
  typeSimple?: string;
  isRequired?: boolean;
  minLength?: number;
  maxLength?: number;
  minimum?: string;
  maximum?: string;
  regex?: string;
  isNullable?: boolean;
};

export type ProviderInfoDto = {
  providerName?: string;
  providerKey?: string;
};

export type RegisterDto = {
  extraProperties?: Record<string, unknown>;
  userName: string;
  emailAddress: string;
  password: string;
  appName: string;
};

export type RemoteServiceErrorInfo = {
  code?: string;
  message?: string;
  details?: string;
  data?: Record<string, unknown>;
  validationErrors?: RemoteServiceValidationErrorInfo[];
};

export type RemoteServiceErrorResponse = {
  error?: RemoteServiceErrorInfo;
};

export type RemoteServiceValidationErrorInfo = {
  message?: string;
  members?: string[];
};

export type ResetPasswordDto = {
  userId?: string;
  resetToken: string;
  password: string;
};

export type ResourcePermissionDefinitionDto = {
  name?: string;
  displayName?: string;
};

export type ResourcePermissionGrantInfoDto = {
  providerName?: string;
  providerKey?: string;
  providerDisplayName?: string;
  providerNameDisplayName?: string;
  permissions?: GrantedResourcePermissionDto[];
};

export type ResourcePermissionWithProdiverGrantInfoDto = {
  name?: string;
  displayName?: string;
  providers?: string[];
  isGranted?: boolean;
};

export type ResourceProviderDto = {
  name?: string;
  displayName?: string;
};

export type ReturnValueApiDescriptionModel = {
  type?: string;
  typeSimple?: string;
};

export type SearchProviderKeyInfo = {
  providerKey?: string;
  providerDisplayName?: string;
};

export type SearchProviderKeyListResultDto = {
  keys?: SearchProviderKeyInfo[];
};

export type SendPasswordResetCodeDto = {
  email: string;
  appName: string;
  returnUrl?: string;
  returnUrlHash?: string;
};

export type SendTestEmailInput = {
  senderEmailAddress: string;
  targetEmailAddress: string;
  subject: string;
  body?: string;
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
  extraProperties?: Record<string, unknown>;
  name: string;
  adminEmailAddress: string;
  adminPassword: string;
};

export type TenantDto = {
  extraProperties?: Record<string, unknown>;
  id?: string;
  name?: string;
  concurrencyStamp?: string;
};

export type TenantUpdateDto = {
  extraProperties?: Record<string, unknown>;
  name: string;
  concurrencyStamp?: string;
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
  isEnum?: boolean;
  enumNames?: string[];
  enumValues?: unknown[];
  genericArguments?: string[];
  properties?: PropertyApiDescriptionModel[];
};

export type UpdateEmailSettingsDto = {
  smtpHost?: string;
  smtpPort?: number;
  smtpUserName?: string;
  smtpPassword?: string;
  smtpDomain?: string;
  smtpEnableSsl?: boolean;
  smtpUseDefaultCredentials?: boolean;
  defaultFromAddress: string;
  defaultFromDisplayName: string;
};

export type UpdateFeatureDto = {
  name?: string;
  value?: string;
};

export type UpdateFeaturesDto = {
  features?: UpdateFeatureDto[];
};

export type UpdatePermissionDto = {
  name?: string;
  isGranted?: boolean;
};

export type UpdatePermissionsDto = {
  permissions?: UpdatePermissionDto[];
};

export type UpdateProfileDto = {
  extraProperties?: Record<string, unknown>;
  userName?: string;
  email?: string;
  name?: string;
  surname?: string;
  phoneNumber?: string;
  concurrencyStamp?: string;
};

export type UpdateResourcePermissionsDto = {
  providerName?: string;
  providerKey?: string;
  permissions?: string[];
};

export type UserData = {
  id?: string;
  tenantId?: string;
  userName?: string;
  name?: string;
  surname?: string;
  isActive?: boolean;
  email?: string;
  emailConfirmed?: boolean;
  phoneNumber?: string;
  phoneNumberConfirmed?: boolean;
  extraProperties?: Record<string, unknown>;
};

export type UserLoginInfo = {
  userNameOrEmailAddress: string;
  password: string;
  rememberMe?: boolean;
};

export type VerifyPasswordResetTokenInput = {
  userId?: string;
  resetToken: string;
};

export type WindowsTimeZone = {
  timeZoneId?: string;
};
