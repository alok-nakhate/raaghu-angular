import { Injectable } from '@angular/core';
import { AlertService, ServiceProxy } from '@libs/shared';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { from, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { deleteClaims, getAllClaimTypes, getAllClaimTypesFailure, getAllClaimTypesSuccess, saveClaimTypes, saveClaimTypesFailure, saveClaimTypesSuccess } from './claim-types.actions';

@Injectable()
export class ClaimTypesEffects {
  constructor(
    private actions$: Actions,
    private claimTypesService: ServiceProxy,
    private alertService: AlertService,
    private store: Store
  ) { }
  getAllClaimTypes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllClaimTypes),
      switchMap(() =>
        // Call the getTodos method, convert it to an observable
        from(this.claimTypesService.claimTypesGET(undefined,undefined,0,1000)).pipe(
          // Take the returned value and return a new success action containing the todos
          map((allClaimTypes) => {
            return getAllClaimTypesSuccess({
              allClaimTypes
            });
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getAllClaimTypesFailure({ error })))
        )
      )
    )
  );
  saveClaimTypes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveClaimTypes),
      switchMap((data) =>
        // Call the getTodos method, convert it to an observable
        from(this.claimTypesService.claimTypesPOST(data)).pipe(
          // Take the returned value and return a new success action containing the todos
          map(() => {
            this.store.dispatch(getAllClaimTypes());
            this.alertService.showAlert('Success', 'ClaimType added successfully','success' )
            return saveClaimTypesSuccess();
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(saveClaimTypesFailure({ error })))
        )
      )
    )
  );
  
  deleteClaims$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteClaims),
      mergeMap(({id}) =>
      this.claimTypesService.claimTypesDELETE(id).pipe(map((res: any) => {
        this.store.dispatch(getAllClaimTypes());
          this.alertService.showAlert('Success', 'ClaimTypes deleted successfully','success' )
        }),
          catchError((error: any) => of(
          ))
        )
      )
    ),
    {
      dispatch: false
    }
  );

  
}