import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../../app.interface';

import { RolesState } from './role.reducer';

export const Roleselector = (state: AppState) => state.roles;
export const selectAllRoles = createSelector(
    Roleselector,
    (state: RolesState) => state.roles
);
export const selectAllPermissions = createSelector(
    Roleselector,
    (state: RolesState) => state.PermissionI
);
export const selectRoleForEdit = createSelector(
    Roleselector,
    (state: RolesState) => state.EditRoleSateI
);

export const selectAllClaimsTypesRoles = createSelector(
    Roleselector,
    (state: RolesState) => state.allClaimTypes
);

export const selectClaimsTypeByRole = createSelector(
    Roleselector,
    (state: RolesState) => state.claimTypes
);
