export const CONSTANTS = {
  GITHUB_LOGIN_URL: '/v1/auth/github',
  AUTH_COOKIE_NAME: 'authentication',
  AUTHENTICATION_ERROR_CODE: 'AuthenticationError',
  PROFILE_STORAGE_NAME: 'profile',
  EMBED_URL: 'https://embed.impler.io/embed.umd.min.js',
  REACT_DOCUMENTATION_URL: 'https://docs.impler.io/widget/react-component#props',
};

export const VARIABLES = {
  DEFAULT_ICON_SIZE: 24,
  ZERO: 0,
  ONE: 1,
  TWO: 2,
  TEN: 10,
  TWENTY: 20,
  THIRTY: 30,
  FORTY: 40,
  FIFTY: 50,
  TWO_HUNDREDS: 200,
  THREE_HUNDREDS: 300,
};

export const MODAL_KEYS = {
  IMPORT_CREATE: 'IMPORT_CREATE',
  IMPORT_UPDATE: 'IMPORT_UPDATE',
  COLUMN_CREATE: 'COLUMN_CREATE',
  COLUMN_UPDATE: 'COLUMN_UPDATE',
  COLUMN_DELETE: 'COLUMN_DELETE',
};

export const MODAL_TITLES = {
  IMPORT_CREATE: 'Start with a new Import',
  COLUMN_CREATE: 'Add a new Column',
  IMPORT_UPDATE: 'Update Import',
  IMPORT_DELETE: 'Delete Import',
  COLUMN_UPDATE: 'Update Column',
  COLUMN_DELETE: 'Delete Column',
};

export const API_KEYS = {
  PROJECTS_LIST: 'PROJECT_LIST',
  PROJECT_CREATE: 'PROJECT_CREATE',
  PROJECT_ENVIRONMENT: 'PROJECT_ENVIRONMENT',

  LOGOUT: 'LOGOUT',
  SIGNIN: 'SIGNIN',
  SIGNUP: 'SIGNUP',

  TEMPLATES_LIST: 'TEMPLATES_LIST',
  TEMPLATES_CREATE: 'TEMPLATES_CREATE',
  TEMPLATE_DETAILS: 'TEMPLATE_DETAILS',
  TEMPLATE_UPDATE: 'TEMPLATE_UPDATE',
  TEMPLATE_DELETE: 'TEMPLATE_DELETE',
  TEMPLATE_COLUMNS_LIST: 'TEMPLATE_COLUMNS_LIST',
  TEMPLATE_CUSTOMIZATION_GET: 'CUSTOMIZATION_GET',
  TEMPLATE_CUSTOMIZATION_UPDATE: 'CUSTOMIZATION_UPDATE',

  COLUMN_CREATE: 'COLUMN_CREATE',
  COLUMN_UPDATE: 'COLUMN_UPDATE',
  COLUMN_DELETE: 'COLUMN_DELETE',

  IMPORTS_LIST: 'IMPORTS_LIST',
  IMPORT_SUMMARY: 'IMPORT_SUMMARY',

  REGENERATE: 'REGENERATE',
};

export const NOTIFICATION_KEYS = {
  IMPORT_UPDATED: 'IMPORT_UPDATED',
  IMPORT_CREATED: 'IMPORT_CREATED',
  IMPORT_DELETED: 'IMPORT_DELETED',

  PROJECT_CREATED: 'PROJECT_CREATED',
  OUTPUT_UPDATED: 'OUTPUT_UPDATED',
  DESTINATION_UPDATED: 'DESTINATION_UPDATED',

  REGENERATED: 'REGENERATED',
};

export const ROUTES = {
  HOME: '/',
  SIGNIN: '/signin',
  SIGNIN_ONBOARDING: '/signin/onboard',
  IMPORTS: '/imports',
};

export const REGULAR_EXPRESSIONS = {
  URL: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm,
};
