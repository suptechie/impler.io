import { JavaScriptIcon } from '@assets/icons/Javascript.icon';
import { ReactIcon } from '@assets/icons/React.icon';
import { AngularIcon } from '@assets/icons/Angular.icon';
import { BubbleIcon } from '@assets/icons/Bubble.icon';
import { IntegrationEnum } from '@impler/shared';
import { Plan } from '@components/UpgradePlan/Plans';

export const CONSTANTS = {
  EXPLORE_PLANS_QUERY_LEY: 'explore_plans',
  PLAN_CODE_QUERY_KEY: 'plan_code',
  GITHUB_LOGIN_URL: '/v1/auth/github',
  AUTH_COOKIE_NAME: 'authentication',
  AUTHENTICATION_ERROR_CODE: 'AuthenticationError',
  PROFILE_STORAGE_NAME: 'profile',
  REACT_DOCUMENTATION_URL: 'https://docs.impler.io/widget/react-component#props',
  PAYMENT_SUCCCESS_CODE: 'success',
  PAYMENT_FAILED_CODE: 'failed',
  PAYMENT_SUCCESS_MESSAGE:
    // eslint-disable-next-line max-len
    'Congratulations! Your subscription has been activated, and benefits have been added to your account. We hope you will love the experience. If you need anything, feel free to contact the support team.',
  PAYMENT_FAILED_MESSAGE:
    'An error occurred with the payment. No amount has been deducted. Please try again later or contact the support team.',
  SUBSCRIPTION_ACTIVATED_TITLE: 'Subscription activated',
  SUBSCRIPTION_FAILED_TITLE: 'Payment failed',
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
  SELECT_CARD: 'SELECT_CARD',
  PAYMENT_SUCCEED: 'successfull_payment',

  IMPORT_DUPLICATE: 'IMPORT_DUPLICATE',
  IMPORT_CREATE: 'IMPORT_CREATE',
  IMPORT_UPDATE: 'IMPORT_UPDATE',
  COLUMN_UPDATE: 'COLUMN_UPDATE',
  COLUMN_DELETE: 'COLUMN_DELETE',
  INTEGRATION_DETAILS: 'Integration Details',

  VALIDATIONS_OUTPUT: 'VALIDATIONS_OUTPUT',
  PAYMENT_PLANS: 'PAYMENT_PLANS',
  PAYMENT_DETAILS_ADD: 'PAYMENT_PLANS',
};

interface IntegrateOption {
  name: IntegrationEnum;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  key: string;
}

export const INTEGRATE_IMPORT: IntegrateOption[] = [
  { name: IntegrationEnum.JAVASCRIPT, Icon: JavaScriptIcon, key: IntegrationEnum.JAVASCRIPT },
  { name: IntegrationEnum.REACT, Icon: ReactIcon, key: IntegrationEnum.REACT },
  { name: IntegrationEnum.ANGULAR, Icon: AngularIcon, key: IntegrationEnum.ANGULAR },
  { name: IntegrationEnum.BUBBLE, Icon: BubbleIcon, key: IntegrationEnum.BUBBLE },
];

export const INTEGRATION_GUIDE = [
  { value: IntegrationEnum.JAVASCRIPT, label: IntegrationEnum.JAVASCRIPT },
  { value: IntegrationEnum.ANGULAR, label: IntegrationEnum.ANGULAR },
  { value: IntegrationEnum.REACT, label: IntegrationEnum.REACT },
  { value: IntegrationEnum.BUBBLE, label: IntegrationEnum.BUBBLE },
];

export type IntegrationLanguage = 'javascript' | 'jsx' | 'typescript' | 'markup' | 'bash';

export const MODAL_TITLES = {
  IMPORT_DUPLICATE: 'Duplicate Import',
  IMPORT_CREATE: 'Start with a new Import',
  IMPORT_UPDATE: 'Update Import',
  IMPORT_DELETE: 'Delete Import',
  COLUMN_UPDATE: 'Configure Column',
  COLUMN_DELETE: 'Delete Column',
  INTEGRATION_DETAILS: 'Integrate',

  VALIDATIONS_OUTPUT: 'Test code output',
};

export const API_KEYS = {
  RESEND_OTP: 'RESEND_OTP',
  VERIFY_EMAIL: 'VERIFY_EMAIL',

  ONBOARD_USER: 'ONBOARD_USER',

  CHECKOUT: 'CHECKOUT',

  APPLY_COUPON_CODE: 'APPLY_COUPON_CODE',

  SUBSCRIBE: 'SUBSCRIBE',
  TRANSACTION_HISTORY: 'TRANSACTION_HISTORY',

  PAYMENT_METHOD_DELETE: 'PAYMENT_METHOD_DELETE',
  PAYMENT_METHOD_LIST: 'PAYMENT_METHOD_LIST',

  ADD_PAYMENT_METHOD: 'ADD_PAYMENT_METHOD',
  SAVE_INTENT_ID: 'SAVE_SETUP_INTENT_ID',

  FETCH_ACTIVE_SUBSCRIPTION: 'FETCH_ACTIVE_SUBSCRIPTION',
  CANCEL_SUBSCRIPTION: 'CANCEL_SUBSCRIPTION',

  PROJECT_SWITCH: 'PROJECT_SWITCH',
  PROJECTS_LIST: 'PROJECT_LIST',
  PROJECT_CREATE: 'PROJECT_CREATE',
  PROJECT_ENVIRONMENT: 'PROJECT_ENVIRONMENT',

  LOGOUT: 'LOGOUT',
  SIGNIN: 'SIGNIN',
  SIGNUP: 'SIGNUP',
  RESET_PASSWORD: 'RESET_PASSWORD',
  REQUEST_FORGOT_PASSWORD: 'REQUEST_FORGOT_PASSWORD',

  IMPORTS_LIST: 'IMPORTS_LIST',
  TEMPLATES_LIST: 'TEMPLATES_LIST',
  TEMPLATES_CREATE: 'TEMPLATES_CREATE',
  TEMPLATE_DETAILS: 'TEMPLATE_DETAILS',
  TEMPLATE_UPDATE: 'TEMPLATE_UPDATE',
  TEMPLATE_DELETE: 'TEMPLATE_DELETE',
  TEMPLATES_DUPLICATE: 'TEMPLATES_DUPLICATE',
  TEMPLATE_COLUMNS_LIST: 'TEMPLATE_COLUMNS_LIST',
  TEMPLATE_CUSTOMIZATION_GET: 'CUSTOMIZATION_GET',
  TEMPLATE_COLUMNS_UPDATE: 'TEMPLATE_COLUMNS_UPDATE',
  TEMPLATE_CUSTOMIZATION_UPDATE: 'CUSTOMIZATION_UPDATE',
  TEMPLATE_CUSTOMIZATION_SYNC: 'CUSTOMIZATION_SYNC',

  COLUMN_CREATE: 'COLUMN_CREATE',
  COLUMN_UPDATE: 'COLUMN_UPDATE',
  COLUMN_DELETE: 'COLUMN_DELETE',

  DESTINATION_FETCH: 'DESTINATION_FETCH',
  DESTINATION_UPDATE: 'DESTINATION_UPDATE',
  BUBBLEIO_MAP_COLUMNS: 'BUBBLEIO_MAP_COLUMNS',

  VALIDATIONS: 'VALIDATIONS',
  VALIDATIONS_UPDATE: 'VALIDATIONS_UPDATE',

  ACTIVITY_HISTORY: 'ACTIVITY_HISTORY',
  ACTIVITY_SUMMARY: 'ACTIVITY_SUMMARY',

  ME: 'ME',
  UPDATE_ME_INFO: 'UPDATE_ME_INFO',
  REGENERATE: 'REGENERATE',
  IMPORT_COUNT: 'IMPORT_COUNT',
  DONWLOAD_ORIGINAL_FILE: 'DOWNLOAD_ORIGINAL_FILE',
};

export const NOTIFICATION_KEYS = {
  OTP_CODE_RESENT_SUCCESSFULLY: 'OTP_CODE_RESENT_SUCCESSFULLY',
  ERROR_ADDING_PAYMENT_METHOD: 'ERROR_ADDING_PAYMENT_METHOD',
  NO_PAYMENT_METHOD_FOUND: 'NO_PAYMENT_METHOD_FOUND',

  ERROR_AUTHORIZING_PAYMENT_METHOD: 'ERROR_AUTHORIZING_PAYMENT_METHOD',

  PAYMENT_INTENT_ID_UPDATED: 'PAYMENT_INTENT_ID_UPDATED',

  MEMBERSHIP_CANCELLED: 'MEMBERSHIP_CANCELLED',
  MEMBERSHIP_PURCHASED: 'MEMBERSHIP_PURCHASED',

  IMPORT_DUPLICATED: 'IMPORT_DUPLICATED',
  IMPORT_UPDATED: 'IMPORT_UPDATED',
  IMPORT_CREATED: 'IMPORT_CREATED',
  IMPORT_DELETED: 'IMPORT_DELETED',

  PROJECT_CREATED: 'PROJECT_CREATED',
  OUTPUT_UPDATED: 'OUTPUT_UPDATED',
  DESTINATION_UPDATED: 'DESTINATION_UPDATED',

  COLUMNS_UPDATED: 'COLUMNS_UPDATED',
  VALIDATIONS_UPDATED: 'VALIDATIONS_UPDATED',
  REGENERATED: 'REGENERATED',

  ERROR_OCCURED: 'ERROR_OCCURED',

  CARD_ADDED: 'CARD_ADDED',
  CARD_REMOVED: 'CARD_REMOVED',
  PURCHASE_FAILED: 'PURCHASE_FAILED',

  COLUMN_ERRROR: 'COLUMN_ERRROR',
};

export const ROUTES = {
  HOME: '/',
  SIGNUP: '/auth/signup',
  SIGNIN: '/auth/signin',
  SIGNUP_ONBOARDING: '/auth/onboard',
  OTP_VERIFY: '/auth/verify',
  RESET_PASSWORD: '/auth/reset',
  REQUEST_FORGOT_PASSWORD: '/auth/reset/request',
  IMPORTS: '/imports',
  SETTINGS: '/settings',
  ACTIVITIES: '/activities',
  ADD_CARD: '/settings?tab=addcard&action=addcardmodal',
  EXPLORE_PLANS: '/?explore_plans=true',
  TRANSACTIONS: '/transactions',
};

export const REGULAR_EXPRESSIONS = {
  URL: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm,
};

export const COLUMN_TYPES = [
  {
    label: 'String',
    value: 'String',
  },
  {
    label: 'Number',
    value: 'Number',
  },
  {
    label: 'Double',
    value: 'Double',
  },
  {
    label: 'Select',
    value: 'Select',
  },
  {
    label: 'Date',
    value: 'Date',
  },
  {
    label: 'Regular Expression',
    value: 'Regex',
  },
  {
    label: 'Email',
    value: 'Email',
  },
  {
    label: 'Image',
    value: 'Image',
  },
  {
    label: 'Any',
    value: 'Any',
  },
];

export const DELIMITERS = [
  {
    label: 'Comma (,)',
    value: ',',
  },
  {
    label: 'Semicolon (;)',
    value: ';',
  },
];

export const TEXTS = {
  SEO_TITLE: 'CSV Excel Import Experience for SaaS',
  SEO_DESCRIPTION:
    // eslint-disable-next-line max-len
    "Build the best CSV Excel Import Experience for SaaS in 10 Minutes. Onboard customers' data with a hassle-free data importer in your app.",
};

export const IMPORT_MODES = [
  { value: 'manual', label: 'Manual' },
  { value: 'automatic', label: 'Automatic' },
];

export const DOCUMENTATION_REFERENCE_LINKS = {
  columnDescription: 'https://docs.impler.io/features/column-description',
  defaultValue: 'https://docs.impler.io/platform/default-value',
  primaryValidation: 'https://docs.impler.io/validations/base',
  multiSelectDropDown: 'https://docs.impler.io/features/multiselect-dropdown',
  freezeColumns: 'https://docs.impler.io/features/freeze-columns',
  frontendEndCallback: 'https://docs.impler.io/data-retrieval/using-frontend-callback',
  webhook: 'https://docs.impler.io/data-retrieval/using-webhook',
  bubbleIo: 'https://docs.impler.io/importer/bubble.io-embed',
  subscriptionInformation: 'https://docs.impler.io/platform/how-subscription-works',
  customValidation: 'https://docs.impler.io/features/custom-validation',
  rangeValidator: 'https://docs.impler.io/validations/advanced#range',
  lengthValidator: 'https://docs.impler.io/validations/advanced#length',
  uniqueWithValidator: 'https://docs.impler.io/validations/advanced#unique-across-multiple-fields',
};

export const COMPANY_SIZES = [
  { value: 'Only me', label: 'Only me' },
  { value: '1-5', label: '1-5' },
  { value: '6-10', label: '6-10' },
  { value: '50-99', label: '50-99' },
  { value: '100+', label: '100+' },
];

export const ROLES = [
  { value: 'Engineer', label: 'Engineer' },
  { value: 'Engineering Manager', label: 'Engineering Manager' },
  { value: 'Architect', label: 'Architect' },
  { value: 'Product Manager', label: 'Product Manager' },
  { value: 'Designer', label: 'Designer' },
  { value: 'Founder', label: 'Founder' },
  { value: 'Marketing Manager', label: 'Marketing Manager' },
  { value: 'Student', label: 'Student' },
  { value: 'CXO (CTO/CEO/Other...)', label: 'CXO (CTO/CEO/Other...)' },
];

export const HOW_HEARD_ABOUT_US = [
  { value: 'Apollo', label: 'Apollo' },
  { value: 'Recommendation', label: 'Recommendation' },
  { value: 'Social Media', label: 'Social Media' },
  { value: 'Google Search', label: 'Google Search' },
  { value: 'Bubble.io', label: 'Bubble.io' },
  { value: 'Colleague', label: 'Colleague' },
  { value: 'Linkdin', label: 'Linkdin' },
];

export const MEMBERSHIP_CANCELLATION_REASONS = [
  'Not liking service',
  'Building my own data importer',
  'No more need of data importer',
  'Moving to another service provider',
  'Something else',
];

export const PLACEHOLDERS = {
  email: 'johndoe@acme.inc',
  password: '********',
  project: 'Acme Inc',
  fullName: 'John Doe',
  companySize: 'Only me',
  role: 'Engineer, Manager, Founder...',
  source: 'Google Search, Recommendation...',
  about: 'Google Search',
};
export const plans: { monthly: Plan[]; yearly: Plan[] } = {
  monthly: [
    {
      name: 'Starter (Default)',
      code: 'STARTER',
      rowsIncluded: 5000,
      price: 0,
      extraChargeOverheadTenThusandRecords: 1,
      removeBranding: false,
      content: {
        'Rows Included': [{ check: true, title: '5K' }],
        'For extra 10K Records': [{ check: true, title: '$1 (Billed monthly)' }],
        Projects: [{ check: true, title: 'Unlimited' }],
        Features: [
          { check: true, title: 'Theming' },
          { check: false, title: 'Remove Branding' },
          { check: true, title: 'Custom Validation' },
          { check: true, title: 'Output Customization' },
        ],
      },
    },
    {
      name: 'Growth',
      code: 'GROWTH-MONTHLY',
      price: 42,
      rowsIncluded: 500000,
      extraChargeOverheadTenThusandRecords: 0.7,
      removeBranding: true,
      content: {
        'Rows Included': [{ check: true, title: '500K' }],
        'For extra 10K Records': [{ check: true, title: '$0.70 (Billed monthly)' }],
        Projects: [{ check: true, title: 'Unlimited' }],
        Features: [
          { check: true, title: 'Theming' },
          { check: true, title: 'Remove Branding' },
          { check: true, title: 'Custom Validation' },
          { check: true, title: 'Output Customization' },
        ],
      },
    },
    {
      name: 'Scale',
      code: 'SCALE-MONTHLY',
      price: 90,
      rowsIncluded: 1500000,
      extraChargeOverheadTenThusandRecords: 0.5,
      removeBranding: true,
      content: {
        'Rows Included': [{ check: true, title: '1.5M' }],
        'For extra 10K Records': [{ check: true, title: '$0.50 (Billed monthly)' }],
        Projects: [{ check: true, title: 'Unlimited' }],
        Features: [
          { check: true, title: 'Theming' },
          { check: true, title: 'Remove Branding' },
          { check: true, title: 'Custom Validation' },
          { check: true, title: 'Output Customization' },
        ],
      },
    },
  ],
  yearly: [
    {
      name: 'Starter (Default)',
      code: 'STARTER',
      rowsIncluded: 5000,
      price: 0,
      extraChargeOverheadTenThusandRecords: 1,
      removeBranding: false,
      content: {
        'Rows Included': [{ check: true, title: '5K' }],
        'For extra 10K Records': [{ check: true, title: '$1 (Billed yearly)' }],
        Projects: [{ check: true, title: 'Unlimited' }],
        Features: [
          { check: true, title: 'Theming' },
          { check: false, title: 'Remove Branding' },
          { check: true, title: 'Custom Validation' },
          { check: true, title: 'Output Customization' },
        ],
      },
    },
    {
      name: 'Growth',
      code: 'GROWTH-YEARLY',
      price: 420,
      rowsIncluded: 6000000,
      extraChargeOverheadTenThusandRecords: 0.7,
      removeBranding: true,
      content: {
        'Rows Included': [{ check: true, title: '6M' }],
        'For extra 10K Records': [{ check: true, title: '$0.70 (Billed yearly)' }],
        Projects: [{ check: true, title: 'Unlimited' }],
        Features: [
          { check: true, title: 'Theming' },
          { check: true, title: 'Remove Branding' },
          { check: true, title: 'Custom Validation' },
          { check: true, title: 'Output Customization' },
        ],
      },
    },
    {
      name: 'Scale',
      code: 'SCALE-YEARLY',
      price: 900,
      rowsIncluded: 18000000,
      extraChargeOverheadTenThusandRecords: 0.5,
      removeBranding: true,
      content: {
        'Rows Included': [{ check: true, title: '18M' }],
        'For extra 10K Records': [{ check: true, title: '$0.50 (Billed yearly)' }],
        Projects: [{ check: true, title: 'Unlimited' }],
        Features: [
          { check: true, title: 'Theming' },
          { check: true, title: 'Remove Branding' },
          { check: true, title: 'Custom Validation' },
          { check: true, title: 'Output Customization' },
        ],
      },
    },
  ],
};
