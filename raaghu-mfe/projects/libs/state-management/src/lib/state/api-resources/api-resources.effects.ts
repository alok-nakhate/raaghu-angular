import { Injectable } from '@angular/core';
import { AlertService, ServiceProxy } from '@libs/shared';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { from, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { deleteApiResource, getAllApiResources, getAllApiResourcesEdit, getAllApiResourcesEditFailure, getAllApiResourcesEditSuccess, getAllApiResourcesFailure, getAllApiResourcesSuccess, getApiResource, getApiResourceFailure, getApiResourceSuccess, saveApiResource, saveApiResourceFailure, saveApiResourceSuccess, updateApiResource, updateApiResourceFailure, updateApiResourceSuccess } from './api-resources.actions';
declare var bootstrap: any;

@Injectable()
export class ApiResourcesEffects {
  constructor(
    private actions$: Actions,
    private apiResourceService: ServiceProxy,
    private alertService: AlertService,
    private store: Store
  ) { }
  getAllApiResources$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllApiResources),
      switchMap(() =>
        // Call the getTodos method, convert it to an observable
        from(this.apiResourceService.apiResourcesGET(undefined, undefined, 0, 1000)).pipe(
          // Take the returned value and return a new success action containing the todos
          map((allApiResources) => {
            return getAllApiResourcesSuccess({
              allApiResources
            });
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getAllApiResourcesFailure({ error })))
        )
      )
    )
  );
  getAllApiResourcesEdit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllApiResourcesEdit),
      switchMap(() =>
        // Call the getTodos method, convert it to an observable
        from(this.apiResourceService.allAll2()).pipe(
          // Take the returned value and return a new success action containing the todos
          map((allApiResourcesEdit) => {
            return getAllApiResourcesEditSuccess({
              allApiResourcesEdit
            });
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getAllApiResourcesEditFailure({ error })))
        )
      )
    )
  );
  getApiResource$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getApiResource),
      switchMap((id) =>
        // Call the getTodos method, convert it to an observable
        from(this.apiResourceService.apiResourcesGET2(id)).pipe(
          // Take the returned value and return a new success action containing the todos
          map((apiResource) => {
            return getApiResourceSuccess({
              apiResource
            });
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getApiResourceFailure({ error })))
        )
      )
    )
  );
  // saveApiResources$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(saveApiResource),
  //     switchMap((data) =>
  //       // Call the getTodos method, convert it to an observable
  //       from(this.apiResourceService.apiResourcesPOST(data.apiResources)).pipe(
  //         // Take the returned value and return a new success action containing the todos
  //         map(() => {
  //           this.store.dispatch(getAllApiResources());
  //           return saveApiResourceSuccess();
  //         }),
  //         // Or... if it errors return a new failure action containing the error
  //         catchError((error) => of(saveApiResourceFailure({ error })))
  //       )
  //     )
  //   )
  // );
  saveApiResources$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveApiResource),
      mergeMap((data) =>
        this.apiResourceService.apiResourcesPOST(data.apiResources).pipe(map((res: any) => {
          this.store.dispatch(getAllApiResources());
          var offcanvasElement = document.getElementById('api-resource-offcanvas');
          if (offcanvasElement) {
            var offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement)
            offcanvas.hide();
          }
          // this.alertService.showAlert('Success', 'Tenant added successfully', 'success')
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
  // updateApiResource$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(updateApiResource),
  //     switchMap((data) =>
  //       // Call the getTodos method, convert it to an observable
  //       from(this.apiResourceService.apiResourcesPUT(data.id, data.body)).pipe(
  //         // Take the returned value and return a new success action containing the todos
  //         map(() => {
  //           this.store.dispatch(getAllApiResources());
  //           return updateApiResourceSuccess();
  //         }),
  //         // Or... if it errors return a new failure action containing the error
  //         catchError((error) => of(updateApiResourceFailure({ error })))
  //       )
  //     )
  //   )
  // );
  updateApiResource$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateApiResource),
      mergeMap((data) =>
        this.apiResourceService.apiResourcesPUT(data.id, data.body).pipe(map((res: any) => {
          this.store.dispatch(getAllApiResources());
          var offcanvasElement = document.getElementById('api-resource-offcanvas');
          if (offcanvasElement) {
            var offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement)
            offcanvas.hide();
          }
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

  deleteApiResource$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteApiResource),
      mergeMap((data) =>
        this.apiResourceService.apiResourcesDELETE(data).pipe(map((res: any) => {
          this.store.dispatch(getAllApiResources());
          this.alertService.showAlert('Success', 'Api Resource deleted successfully', 'success')
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