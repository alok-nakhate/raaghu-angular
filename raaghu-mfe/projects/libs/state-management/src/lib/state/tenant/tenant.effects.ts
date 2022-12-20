import { Injectable } from "@angular/core";
import { AlertService, ServiceProxy } from "@libs/shared";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { from, of } from "rxjs";
import { catchError, filter, map, mergeMap, switchMap } from "rxjs/operators";
import { getTenants, getTenantSuccess, getTenantFailure, deleteTenant, updateTenant, getEditionComboboxItems, getEditionComboboxItemsFailure, getEditionComboboxItemsSuccess, getTenantForEdit, getTenantForEditSuccess, getTenantForEditFailure, getTenantFeaturesForEdit, getTenantFeaturesForEditSuccess, getTenantFeaturesForEditFailure, updateTenantFeatureValues, saveTenant } from "./tenant.actions";

@Injectable()
export class TenantEffects {
  constructor(private actions$: Actions, private tenantService: ServiceProxy, private alertService: AlertService, private store: Store) { }
  getTenants$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTenants),
      switchMap(() =>
        // Call the getTodos method, convert it to an observable
        from(this.tenantService.tenantsGET2(undefined, undefined, undefined, undefined, undefined, undefined, undefined, 0, 1000)).pipe(
          // Take the returned value and return a new success action containing the todos
          map((tenants: any) => {
            return getTenantSuccess({ tenants: tenants })
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getTenantFailure({ error })))
        )
      )
    )
  );
  
  getEditionComboboxItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getEditionComboboxItems),
      switchMap(() =>
        // Call the getTodos method, convert it to an observable
        from(this.tenantService.editionsGET2(undefined, undefined, 0, 1000)).pipe(
          // Take the returned value and return a new success action containing the todos
          map((editionComboboxItem) => {
            return getEditionComboboxItemsSuccess( {editionComboboxItem});
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getEditionComboboxItemsFailure({ error })))
        )
      )
    )
  );

  saveTenant$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveTenant),
      mergeMap((data,maxresult) =>
        this.tenantService.tenantsPOST(data.tenant).pipe(map((res: any) => {
          this.store.dispatch(getTenants());
          this.alertService.showAlert('Success', 'Tenant added successfully', 'success')


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

  deleteTenant$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteTenant),
      mergeMap(({ id }) =>
        this.tenantService.tenantsDELETE(id).pipe(map(() => {
          this.store.dispatch(getTenants());
          this.alertService.showAlert('Success', 'Tenant deleted successfully', 'success')

        }
        ),
          catchError((error) => of())
        )
      )
    ),
    // Most effects dispatch another action, but this one is just a "fire and forget" effect
    { dispatch: false }
  );

  updateTenant$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateTenant),
      mergeMap((data) =>
        this.tenantService.tenantsPUT(data.id, data.body).pipe(map((res: any) => {
          this.store.dispatch(getTenants());
          this.alertService.showAlert('Success', 'Tenant updated successfully', 'success')

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

  getTenantForEdit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTenantForEdit),
      switchMap(({ id }) => {
        return (this.tenantService.tenantsGET(id)).pipe(
          map((tenant) => {
            return getTenantForEditSuccess( {tenant} )
          }),
          catchError((error) => of(getTenantForEditFailure({ error })))
        )
      }
      )
    )
  );

  getTenantFeaturesForEdit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTenantFeaturesForEdit),
      switchMap(({ id }) => {
        return (this.tenantService.featuresGET("T",id)).pipe(
          map((tenantFeature: any) => {
            return getTenantFeaturesForEditSuccess({ tenantFeature: tenantFeature })
          }),
          catchError((error) => of(getTenantFeaturesForEditFailure({ error })))
        )
      }
      )
    )
  );

  updateTenantFeatureValues$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateTenantFeatureValues),
      mergeMap((data) =>
        this.tenantService.featuresPUT("T",data.id ,data.feature ).pipe(map((res: any) => {
          this.alertService.showAlert('Success', 'Tenant features updated successfully', 'success');

          // this.store.dispatch(getTenants())
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
