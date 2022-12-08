export interface RemoteConfigInterface {
  information_center: InformationCenter
  faq: FAQ
  in_app_review: InAppReview
  maintenance: Maintenance
  maintenance_web: Maintenance
  maintenance_gold: Maintenance
  validation: Validation
  maintenance_sbn: Maintenance
  guidances: Guidance[]
  super_app_menu: SuperAppMenu[]
  super_app_menu_v2: SuperAppMenuV2[]
  quotes: Quote[]
  documents: Documents
  storage: Storage
  apps_version: AppsVersion
  subscription: Subscription
  switching: Switching
  redemption: Redemption
  umrah: Umrah
  gold: Gold
  sbn: Sbn
  country: Country[]
}

export interface AppsVersion {
  ios: Ios
  android: Android
}

export interface Android {
  data: AndroidData
}

export interface AndroidData {
  minimum_version: number
  app_version_name: string
  store_rating: number
  rating_count: number
  link: string
  notes: string
}

export interface Ios {
  data: IosData
}

export interface IosData {
  minimum_version: string
  app_version_name: string
  store_rating: number
  rating_count: number
  link: string
  notes: string
}

export interface Country {
  name: string
  code: string
}

export interface Documents {
  disclaimer: string
  terms_onboarding: string
}

export interface FAQ {
  articleID: ArticleID
}

export interface ArticleID {
  sbn: string
}

export interface Gold {
  partner: Partner[]
  fee: Fee
}

export interface Fee {
  redeem_disbursement: number
}

export interface Partner {
  name: string
  label: string
  status: boolean
  show_new_tag: boolean
  is_white_list: boolean
  white_list: number[]
}

export interface Guidance {
  page: string
  status: boolean
  media: string
}

export interface InAppReview {
  status: boolean
}

export interface InformationCenter {
  live_chat: LiveChat
  label: string
  email: string
  phone: string
}

export interface LiveChat {
  twenty_four_seven: boolean
  exchange_day_only: boolean
  open: string
  close: string
  label: string
}

export interface Maintenance {
  status: boolean
  scheduled: boolean
  day: string
  time: string
  red_carpet: number[]
  pegadaian_maintenance?: PegadaianMaintenance
}

export interface PegadaianMaintenance {
  status: boolean
  text: string
}

export interface Quote {
  author: string
  en: string
  id: string
}

export interface Redemption {
  robo: RedemptionRobo
}

export interface RedemptionRobo {
  profit_floor: number
  fee_starting_date: Date
  fee_percent: number
  fee_percent_max: number
}

export interface Sbn {
  main: DetailProduct
  detail_product: DetailProduct
  how_to_buy: DetailProduct
}

export interface DetailProduct {
  meta: Meta
}

export interface Meta {
  title: string
  description: string
  image: string
}

export interface Storage {
  registration: Registration
  info_center: InfoCenter
  other: Other
}

export interface InfoCenter {
  bucket: string
  path: InfoCenterPath
}

export interface InfoCenterPath {
  email_attachment: string
}

export interface Other {
  bucket: string
  path: OtherPath
}

export interface OtherPath {
  other_folder: string
}

export interface Registration {
  bucket: string
  path: RegistrationPath
}

export interface RegistrationPath {
  identity: string
  signature: string
  selfie: string
  selfie_with_ktp: string
}

export interface Subscription {
  robo: SubscriptionRobo
}

export interface SubscriptionRobo {
  minimum_first_buy: number
  minimum_topup: number
}

export interface SuperAppMenu {
  id: number
  type: string
  title: string
  items: SuperAppMenuItem[]
}

export interface SuperAppMenuItem {
  id: number
  title: string
  short_title: string
  description: string
  page_url?: string
  status: boolean
  date_start?: Date
  date_end?: Date
  minimum_version?: PurpleMinimumVersion
  promo?: Promo[]
  code?: string
}

export interface PurpleMinimumVersion {
  ios: string
  android: string
}

export interface Promo {
  program: string
  description: string
  code: string
  start: Date
  end: Date
  rewards: string
  minimum_transaction: number
  terms: string[]
}

export interface SuperAppMenuV2 {
  id: number
  type: string
  title: string
  items: SuperAppMenuV2Item[]
}

export interface SuperAppMenuV2Item {
  id: number
  code: string
  title: string
  short_title: string
  description: string
  home_icon?: string
  detail_icon?: string
  page_url?: string
  status: boolean
  date_start?: Date
  date_end?: Date
  minimum_version: FluffyMinimumVersion
  promo?: Promo[]
}

export interface FluffyMinimumVersion {
  ios: string
  android: number
}

export interface Switching {
  retail: Retail
}

export interface Retail {
  minimum: number
}

export interface Umrah {
  simulation: Simulation
  savings: Savings
}

export interface Savings {
  voucher: number
}

export interface Simulation {
  monthly_inflation: number
  monthly_return_rd: number
  monthly_return_deposito: number
  monthly_return_bank: number
  inflation_per_year: number
  return_rd_per_year: number
  return_deposito_per_year: number
  return_bank_per_year: number
}

export interface Validation {
  pegadaian: Pegadaian
  indogold: Indogold
}

export interface Indogold {
  buy: Buy
  sell: Sell
}

export interface Buy {
  isMaxHarga: boolean
  isMaxGram: boolean
  minHarga: number
}

export interface Sell {
  isMaxGram: boolean
  isMaxHarga: boolean
  isFundSettles?: boolean
  minHarga: number
  maxGram: number
  maxHarga?: number
  maxSettles?: number
}

export interface Pegadaian {
  buy: Sell
  sell: Sell
}
