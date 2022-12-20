import { createReducer, on } from "@ngrx/store";
import { getTenants, getTenantSuccess, getTenantFailure, getEditionComboboxItems, getEditionComboboxItemsSuccess, getEditionComboboxItemsFailure, getTenantForEdit, getTenantForEditSuccess, getTenantForEditFailure, getTenantFeaturesForEdit, getTenantFeaturesForEditSuccess, getTenantFeaturesForEditFailure } from "./tenant.actions";
import { Tenants } from "./tenant.models";


export interface TenantState {
    tenants: any;
    tenantInfo: any;
    editions: any;
    features:any;
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}

export const TenantInitialState: TenantState = {
    tenants: { items: [] },
    editions: null,
    tenantInfo: null,
    features:null,
    error: null,
    status: 'pending',
};
export const TenantReducer = createReducer(
    // Supply the initial state
    TenantInitialState,
    on(getTenants, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getTenantSuccess, (state, { tenants }) => ({
        ...state,
        tenants: tenants,
        error: null,
        status: 'success',
    })),
    // Handle todos load failure
    on(getTenantFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),
    on(getTenantFeaturesForEdit, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getTenantFeaturesForEditSuccess, (state, { tenantFeature }) => ({
        ...state,
        features: tenantFeature,
        error: null,
        status: 'success',
    })),
    // Handle todos load failure
    on(getTenantFeaturesForEditFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),
    on(getEditionComboboxItems, (state) => ({ ...state, status: 'loading' })),
    on(getEditionComboboxItemsSuccess, (state, { editionComboboxItem }) => ({
        ...state,
        editions: editionComboboxItem,
        error: null,
        status: 'success',
    })),
    on(getEditionComboboxItemsFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),
    on(getTenantForEdit, (state) => ({ ...state, status: 'loading' })),
    on(getTenantForEditSuccess, (state, { tenant }) => ({
        ...state,
        tenantInfo: tenant,
        error: null,
        status: 'success',
    })),
    on(getTenantForEditFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    }))
)



