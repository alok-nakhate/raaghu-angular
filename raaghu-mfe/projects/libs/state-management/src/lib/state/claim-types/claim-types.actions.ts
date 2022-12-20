 import { createAction, props } from "@ngrx/store";

export const getAllClaimTypes = createAction('[Claim Types Page] Get All Claim Types');

export const getAllClaimTypesSuccess = createAction(
    '[Claim Types Page] Get All Claim Types Success',
    props<{ allClaimTypes: any }>()
);

export const getAllClaimTypesFailure = createAction(
    '[Claim Types Page] Get All Claim Types Failure',
    props<{ error: string }>()
);


export const saveClaimTypes = createAction(
    '[Claim Types Page] Save Claim Types',
    (data) => ( data )
    );

export const saveClaimTypesSuccess = createAction(
    '[Claim Types Page] Save Claim Types Success',
);

export const saveClaimTypesFailure = createAction(
    '[Claim Types Page] Save Claim Types Failure',
    props<{ error: string }>()
);

export const deleteClaims = createAction(
    '[Claim Types Page] Delete Claim Types',
    (id: any) => ({id})
);
export const deleteClaimsSucess = createAction(
    '[Claim Types Page] Delete Claim Types Success',
);

