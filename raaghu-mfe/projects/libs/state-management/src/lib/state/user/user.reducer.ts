import { createReducer, on } from "@ngrx/store";
import { assignableRoles, assignableRolesFailure, assignableRolesSuccess, availbleOrganizationUnit, availbleOrganizationUnitFailure, availbleOrganizationUnitSuccess, changePasswordUser, changePasswordUserSuccess, getAllClaimTypes, getAllClaimTypesFailure, getAllClaimTypesSuccess, getClaimTypes, getClaimTypesFailure, getClaimTypesSuccess, getTemplateContent, getTemplateContentFailure, getTemplateContentSuccess, getTemplateDefinition, getTemplateDefinitionFailure, getTemplateDefinitionSuccess, getUserFailure, getUserForEdit, getUserForEditSuccess, getUserPermission, getUserPermissionFilterList, getUserPermissionListSuccess, getUserPermissionSuccess, getUsers, getUserSuccess, saveClaims } from "./user.actions";
import { User } from "./user.models";


export interface UsersState {
    users: any;
    UserEditI: any;
    allTextTemplate:any;
    templateContent:any;
    availableOrgUnit: any;
    assignableRoles:any;
    claimTypes:any;
    allClaimTypes:any;
    UserPermissionStateI: any;
    UserPermissionFilterI:any;
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}

export const userInitialState: UsersState = {
    users: null,
    UserEditI:null,
    availableOrgUnit: null,
    assignableRoles:null,
    allTextTemplate:null,
    templateContent:null,
    claimTypes:null,
    allClaimTypes:null,
    UserPermissionStateI: null,
    UserPermissionFilterI:null,
    error: null,
    status: 'pending',
};

export const UserReducer = createReducer(
    // Supply the initial state
    userInitialState,
    on(getTemplateDefinition, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getTemplateDefinitionSuccess, (state,  allTextTemplate ) => ({
        ...state,
        allTextTemplate: allTextTemplate,   
        error: null,
        status: 'success',
    })),
    // Handle todos load failure
    on(getTemplateDefinitionFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),
    on(getTemplateContent, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getTemplateContentSuccess, (state, { templateContent}) => ({
        ...state,
        templateContent: templateContent,   
        error: null,
        status: 'success',
    })),
    // Handle todos load failure
    on(getTemplateContentFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),
    on(getUsers, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getUserSuccess, (state, users) => ({
        ...state,
        users: users,
        error: null,
        status: 'success',
    })),
    // Handle todos load failure
    on(getUserFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),
    on(availbleOrganizationUnit, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(availbleOrganizationUnitSuccess, (state, { availableOrgUnit }) => ({
        ...state,
        availableOrgUnit: availableOrgUnit,
        error: null,
        status: 'success',
    })),
    // Handle todos load failure
    on(availbleOrganizationUnitFailure, (state, { error }) => ({
        ...state,
        availableOrgUnit: null,
        error: error,
        status: 'error',
    })),

    on(assignableRoles, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(assignableRolesSuccess, (state, { assignableRoles }) => ({
        ...state,
        assignableRoles: assignableRoles,
        error: null,
        status: 'success',
    })),
    // Handle todos load failure
    on(assignableRolesFailure, (state, { error }) => ({
        ...state,
        assignableRoles: null,
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

    on(saveClaims, (state) => ({
        ...state,
        error: null,
        status: 'success',
    })),
    on(changePasswordUser, (state) => ({
        ...state,
        error: null,
        status: 'loading',
    })),
    on(changePasswordUserSuccess, (state) => ({
        ...state,
        error: null,
        status: 'success',
    })),

    on(getUserForEdit, (state) => ({ ...state, status: 'loading' })),
    on(getUserForEditSuccess, (state, { UserEditI }) => ({
        ...state,
        UserEditI: UserEditI,
        error: null,
        status: 'success',
    })),
    on(getUserPermission, (state) => ({ ...state, status: 'loading' })),
    on(getUserPermissionSuccess, (state, { UserPermissionI }) => ({
        ...state,
        UserPermissionI: UserPermissionI,
        error: null,
        status: 'success',
    })),
    on(getUserPermissionFilterList, (state) => ({ ...state, status: 'loading' })),
    on(getUserPermissionListSuccess, (state, { UserPermissionFilterI }) => ({
        ...state,
        UserPermissionFilterI: UserPermissionFilterI,
        error: null,
        status: 'success',
    })),
)


// export interface TextTemplateState {
//     allTextTemplate:any;
//     templateContent:any;
//     error: string;
//     status: 'pending' | 'loading' | 'error' | 'success';
// }


// export const TextTemplateInitialState: TextTemplateState = {
//     allTextTemplate:null,
//     templateContent:null,
//     error: null,
//     status: 'pending',
// };

// export const TextTemplateReducer = createReducer(
//     // Supply the initial state
//     TextTemplateInitialState,
    
   
   
   
// )

