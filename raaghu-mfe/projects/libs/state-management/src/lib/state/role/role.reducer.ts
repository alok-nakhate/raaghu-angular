import { createReducer, on } from "@ngrx/store";
import { deleteRole, getAllClaimTypes, getAllClaimTypesFailure, getAllClaimTypesSuccess, getClaimTypes, getClaimTypesFailure, getClaimTypesSuccess, getPermission, getPermissionSuccess, getRolByEdit, getRolByEditFailure, getRolByEditSuccess, getRoleFailure, getRoles, getRoleSuccess, saveClaims, savePermissions, saveRole } from "./role.actions";
import { PermissionData, Role } from "./role.models";


export interface RolesState {
    roles: any;
    PermissionI: any;
    allClaimTypes: any;
    claimTypes:any;
    EditRoleSateI: any;
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}

export const roleInitialState: RolesState = {
    roles: null,
    PermissionI: null,
    allClaimTypes:null,
    claimTypes:null,
    EditRoleSateI:null,
    error: null,
    status: 'pending',
};

export const RoleReducer = createReducer(
    roleInitialState,
    on(getRoles, (state) => ({ ...state, status: 'loading' })),
    on(getRoleSuccess, (state, { roles }) => ({
        ...state,
        roles: roles,
        error: null,
        status: 'success',
    })),
    on(getRoleFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),

    on(getAllClaimTypes, (state) => ({ ...state, status: 'loading' })),
    on(getAllClaimTypesSuccess, (state, { allClaimTypes }) => ({
        ...state,
        allClaimTypes: allClaimTypes,
        error: null,
        status: 'success',
    })),
    on(getAllClaimTypesFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),

    on(getClaimTypes, (state) => ({ ...state, status: 'loading' })),
    on(getClaimTypesSuccess, (state, { claimTypes }) => ({
        ...state,
        claimTypes: claimTypes,
        error: null,
        status: 'success',
    })),
    on(getClaimTypesFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),
    
    on(getPermission, (state) => ({ ...state, status: 'loading' })),
    on(getPermissionSuccess, (state, { PermissionI }) => ({
        ...state,
        PermissionI: PermissionI,
        error: null,
        status: 'success',
    })),

    on(getRolByEdit, (state) => ({ ...state, status: 'loading' })),
    on(getRolByEditSuccess, (state, { EditRoleSateI }) => ({
        ...state,
        EditRoleSateI: EditRoleSateI,
        error: null,
        status: 'success',
    })),
    on(getRolByEditFailure, (state, { error }) => ({
        ...state,
        RoleEditI: null,
        error: error,
    })),

    on(saveClaims, (state) => ({
        ...state,
        error: null,
        status: 'success',
    })),

    on(savePermissions, (state) => ({
        ...state,
        error: null,
        status: 'success',
    })),

    on(saveRole, (state) => ({
        ...state,
        error: null,
        status: 'success',
    })),

    on(deleteRole, (state) => ({
        ...state,
        error: null,
        status: 'success',
    })),
    
)


