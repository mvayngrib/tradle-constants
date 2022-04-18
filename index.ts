
const DATA_ARG_NAME = 'data'

export = Object.freeze({
  IDENTITY_PUBLISH_ADDRESS: 'mhKnKtPFCbYpC61buDMgSBB57mqiWvXCUo',
  DATA_ARG_NAME: DATA_ARG_NAME,
  JSON_CONTENT_DISP: `Content-Disposition: form-data; name="${DATA_ARG_NAME}"` as const,
  DEFAULT_BOUNDARY: '--------------------------000000000000000000000000',
  OP_RETURN_PREFIX: 'tradle',
  ENTRY_PROP: '_',
  TYPE: '_t',
  /**
   * @deprecated use LINK
   */
  CUR_HASH: '_c',
  LINK: '_c',
  /**
   * @deprected use PREV_LINK
   */
  PREV_HASH: '_p',
  PREVLINK: '_p',
  /**
   * @deprecated use PERMALINK
   */
  ROOT_HASH: '_r',
  PERMALINK: '_r',
  OWNER: '_o',
  SIG: '_s',
  WITNESSES: '_w',
  SEQ: '_n',
  SIGNEE: '_i',
  /**
   * @deprecated use PREV_TO_RECIPIENT
  */
  PREV_TO_SENDER: '_q',
  PREV_TO_RECIPIENT: '_q',
  AUTHOR: '_author',
  RECIPIENT: '_recipient',
  ORG: '_org',
  ORG_SIG: '_orgsig',
  TIMESTAMP: '_time',
  VERSION: '_v',
  PROTOCOL_VERSION: '_pv',
  PREVHEADER: '_ph',
  TYPES: Object.freeze({
    MODEL: 'tradle.Model',
    IDENTITY: 'tradle.Identity',
    PROFILE: 'tradle.Profile',
    ORGANIZATION: 'tradle.Organization',
    VERIFICATION: 'tradle.Verification',
    FORGET_ME: 'tradle.ForgetMe',
    FORGOT_YOU: 'tradle.ForgotYou',
    REQUEST_FOR_REPRESENTATIVE: 'tradle.RequestForRepresentative',
    IDENTITY_PUBLISHING_REQUEST: 'tradle.IdentityPublishRequest',
    PRODUCT_LIST: 'tradle.ProductList',
    CUSTOMER_WAITING: 'tradle.CustomerWaiting',
    MESSAGE: 'tradle.Message',
    SIMPLE_MESSAGE: 'tradle.SimpleMessage',
    ADDITIONAL_INFO: 'tradle.AdditionalInfo',
    MONEY: 'tradle.Money',
    FINANCIAL_PRODUCT: 'tradle.FinancialProduct',
    FORM: 'tradle.Form',
    MY_IDENTITIES: 'tradle.MyIdentities_1',
    SETTINGS: 'tradle.Settings',
    SELF_INTRODUCTION: 'tradle.SelfIntroduction',
    ENUM: 'tradle.Enum',
    PARTIAL: 'tradle.Partial'
  } as const),
  NONCE: '_z',
  afterBlockTimestamp: 1447181514
} as const)
