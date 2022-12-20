import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../../app.interface';
import { TenantState } from './tenant.reducer';

export const selectTenant = (state: AppState) => state.tenants;
// export const selectAllTenants = createSelector(
//   selectTenants,
//     (state: TenantState) => state.tenants
// );

export const selectAllTenants = createSelector(
  selectTenant,
  (state: TenantState) => state.tenants
);
export const selectEditionComboboxItems = createSelector(
  selectTenant,
  (state: TenantState) => state.editions
);
export const selectTenantInfo = createSelector(
  selectTenant,
  (state: TenantState) => state.tenantInfo
);
export const selectTenantFeature = createSelector(
  selectTenant,
  (state: TenantState) => state.features
);
