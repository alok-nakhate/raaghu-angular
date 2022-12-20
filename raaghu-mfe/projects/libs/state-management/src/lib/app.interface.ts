
 import { OrganizationUnitState } from './state/organization-unit/organization-unit.reducer';
// impo} from './state/mla/mla.reducer';
import { LanguageTextsState } from './state/language-text/language-text.reducer';
// import { SettingsState, SettingsTenantPageComboboxState } from './state/settings/settings.reducer';
// import { ValidateTenantState } from './state/login/login.reducer';
import { downloadState } from './state/DownloadData/download-data.reducer';

import { ValidateTenantState } from "./state/login/login.reducer";
import { LanguagesState } from './state/language/language.reducer';
import { EditionsState } from './state/edition/edition.reducer';
import { TenantState } from './state/tenant/tenant.reducer';
import { RolesState } from './state/role/role.reducer';
import { UsersState } from './state/user/user.reducer';
import { AuditLogsState } from './state/audit-logs/audit-logs.reducer';
import { IdentityResourcesState } from './state/identity-resources/identity-resources.reducer';
import { ClientState } from './state/clients/clients.reducer';
import { ClaimTypesState } from './state/claim-types/claim-types.reducer';
import { ApiResourcesState } from './state/api-resources/api-resources.reducer';
import { ManageLinkedAccountsState } from './state/manage-linked-accounts/manage-linked-accounts.reducer';
import { SettingsState } from './state/settings/settings.reducer';
import { ProductState } from './state/products/product.reducer';
import { ScopeState } from './state/api-scope/api-scope.reducer';
import { ProfileState } from './state/profile-settings/profile-settings.reducers';
import { SecurityState } from './state/security-logs/security-logs.reducer';
import { TextTemplateState } from './state/text-template/text-template.reducer';

export interface AppState {
    changeLogs: any;

  user:UsersState,
  products: ProductState,
  securityLogs:SecurityState,
  profileSettings: ProfileState,
  organizationUnit: OrganizationUnitState,
  editions: EditionsState,
  roles: RolesState,
  languages: LanguagesState,
  ManageLinkedAccounts: ManageLinkedAccountsState,
  // loginAttempts: LoginAttemptsState,
  settings: SettingsState,
  tenants: TenantState,
   auditLogs: AuditLogsState,
  textTemplate: TextTemplateState,

  validateTenant: ValidateTenantState,
  identityResources: IdentityResourcesState,
  apiResources: ApiResourcesState,
  languageText: LanguageTextsState,
  clients: ClientState,
  download:downloadState,
  claimTypes: ClaimTypesState
  apiScope: ScopeState
}

export const products = 'products';
export const Validatetenant = 'ValidatetenantState';
export const maintenances = 'maintenances';
export const visualsettings = 'visualsettings';
export const Subscription = 'Subscription';
export const auditLogs = 'auditLogs';
export const languageText = 'languageText';
export const download = 'download';



