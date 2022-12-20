import { createSelector } from '@ngrx/store';
import { AppState } from '../../app.interface';
import { ClientState } from './clients.reducer';

export const selectClients = (state: AppState) => state.clients;
// export const selectDynamicEntity = (state: AppState) => state.dynamicEntity;

export const selectAllClients = createSelector(
    selectClients,
    (state: ClientState) => state.allClient
);

export const selectClient = createSelector(
    selectClients,
    (state: ClientState) => state.client
);

export const selectAllPermissions = createSelector(
    selectClients,
    (state: ClientState) => state.PermissionI
);