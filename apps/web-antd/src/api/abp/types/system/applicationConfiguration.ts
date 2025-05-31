interface DateTimeFormat {
  calendarAlgorithmType: string;
  dateTimeFormatLong: string;
  shortDatePattern: string;
  fullDateTimePattern: string;
  dateSeparator: string;
  shortTimePattern: string;
  longTimePattern: string;
}

interface CurrentCulture {
  displayName: string;
  englishName: string;
  threeLetterIsoLanguageName: string;
  twoLetterIsoLanguageName: string;
  isRightToLeft: boolean;
  cultureName: string;
  name: string;
  nativeName: string;
  dateTimeFormat: DateTimeFormat;
}

interface Language {
  cultureName: string;
  uiCultureName: string;
  displayName: string;
  twoLetterISOLanguageName: string;
}

interface Localization {
  values: {
    [key: string]: {
      additionalProp1: string;
      additionalProp2: string;
      additionalProp3: string;
    };
  };
  resources: {
    [key: string]: {
      baseResources: string[];
      texts: {
        additionalProp1: string;
        additionalProp2: string;
        additionalProp3: string;
      };
    };
  };
  languages: Language[];
  currentCulture: CurrentCulture;
  defaultResourceName: string;
  languagesMap: {
    [key: string]: Array<{ name: string; value: string }>;
  };
  languageFilesMap: {
    [key: string]: Array<{ name: string; value: string }>;
  };
}

interface Auth {
  grantedPolicies: {
    [key: string]: boolean;
  };
}

interface Setting {
  values: {
    [key: string]: string;
  };
}

interface CurrentUser {
  isAuthenticated: boolean;
  id: string;
  tenantId: string;
  impersonatorUserId: string;
  impersonatorTenantId: string;
  impersonatorUserName: string;
  impersonatorTenantName: string;
  userName: string;
  name: string;
  surName: string;
  email: string;
  emailVerified: boolean;
  phoneNumber: string;
  phoneNumberVerified: boolean;
  roles: string[];
  sessionId: string;
}

interface Features {
  values: {
    [key: string]: string;
  };
}

interface GlobalFeatures {
  enabledFeatures: string[];
}

interface MultiTenancy {
  isEnabled: boolean;
}

interface CurrentTenant {
  id: string;
  name: string;
  isAvailable: boolean;
}

interface Timing {
  timeZone: {
    iana: {
      timeZoneName: string;
    };
    windows: {
      timeZoneId: string;
    };
  };
}

interface Clock {
  kind: string;
}

interface Property {
  type: string;
  typeSimple: string;
  displayName: {
    name: string;
    resource: string;
  };
  api: {
    onCreate: {
      isAvailable: boolean;
    };
    onGet: {
      isAvailable: boolean;
    };
    onUpdate: {
      isAvailable: boolean;
    };
  };
  ui: {
    lookup: {
      displayPropertyName: string;
      filterParamName: string;
      resultListPropertyName: string;
      url: string;
      valuePropertyName: string;
    };
    onCreateForm: {
      isVisible: boolean;
    };
    onEditForm: {
      isVisible: boolean;
    };
    onTable: {
      isVisible: boolean;
    };
  };
  attributes: Array<{
    config: {
      [key: string]: string;
    };
    typeSimple: string;
  }>;
  configuration: {
    [key: string]: string;
  };
  defaultValue: string;
}

interface Entity {
  properties: {
    [key: string]: Property;
  };
  configuration: {
    [key: string]: string;
  };
}

interface Module {
  entities: {
    [key: string]: Entity;
  };
  configuration: {
    [key: string]: string;
  };
}

interface EnumField {
  name: string;
  value: string;
}

interface Enum {
  fields: EnumField[];
  localizationResource: string;
}

interface ObjectExtensions {
  modules: {
    [key: string]: Module;
  };
  enums: {
    [key: string]: Enum;
  };
}

interface ExtraProperties {
  [key: string]: string;
}

interface ApplicationConfiguration {
  localization: Localization;
  auth: Auth;
  setting: Setting;
  currentUser: CurrentUser;
  features: Features;
  globalFeatures: GlobalFeatures;
  multiTenancy: MultiTenancy;
  currentTenant: CurrentTenant;
  timing: Timing;
  clock: Clock;
  objectExtensions: ObjectExtensions;
  extraProperties: ExtraProperties;
}

export type { ApplicationConfiguration };
