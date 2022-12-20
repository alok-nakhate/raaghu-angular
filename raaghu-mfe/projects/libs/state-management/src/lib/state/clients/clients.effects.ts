import { Injectable } from '@angular/core';
import { AlertService, ServiceProxy } from '@libs/shared';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { from, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { getRoleFailure } from '../role/role.actions';
import { deleteClient, getAllClients, getAllClientsFailure, getAllClientsSuccess, getClient, getClientFailure, getClientSuccess, getPermissions, getPermissionSuccess, saveClient, saveClientFailure, saveClientSuccess, savePermissions, updateClient, updateClientFailure, updateClientSuccess } from './clients.actions';


@Injectable()
export class ClientsEffects {
  constructor(
    private actions$: Actions,
    private clientsService: ServiceProxy,
    private alertService: AlertService,
    private store: Store,
    private roleService: ServiceProxy
  ) { }
  getAllClients$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllClients),
      switchMap(() =>
        // Call the getTodos method, convert it to an observable
        from(this.clientsService.clientsGET(undefined,undefined,0,1000)).pipe(
          // Take the returned value and return a new success action containing the todos
          map((allClients) => {
            return getAllClientsSuccess({
              allClients
            });
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getAllClientsFailure({ error })))
        )
      )
    )
  );
  getClient$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getClient),
      switchMap((id) =>
        // Call the getTodos method, convert it to an observable
        from(this.clientsService.clientsGET2(id)).pipe(
          // Take the returned value and return a new success action containing the todos
          map((client) => {
            return getClientSuccess({
              client
            });
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getClientFailure({ error })))
        )
      )
    )
  );
  saveClient$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveClient),
      switchMap((data) =>
        // Call the getTodos method, convert it to an observable
        from(this.clientsService.clientsPOST(data)).pipe(
          // Take the returned value and return a new success action containing the todos
          map(() => {
            this.store.dispatch(getAllClients());
            return saveClientSuccess();
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(saveClientFailure({ error })))
        )
      )
    )
  );
  updateClient$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateClient),
      switchMap((data) =>
        // Call the getTodos method, convert it to an observable
        from(this.clientsService.clientsPUT(data.id, data.body)).pipe(
          // Take the returned value and return a new success action containing the todos
          map(() => {
            this.store.dispatch(getAllClients());
            return updateClientSuccess();
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(updateClientFailure({ error })))
        )
      )
    )
  );
  
  deleteClient$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteClient),
      mergeMap((data) =>
      this.clientsService.clientsDELETE(data).pipe(map((res: any) => {
        this.store.dispatch(getAllClients());
          this.alertService.showAlert('Success', 'Client deleted successfully','success' )
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

  getPermissions$ = createEffect(() =>
  this.actions$.pipe(
    ofType(getPermissions),
    switchMap(({name}) =>
      // Call the getTodos method, convert it to an observable
      from(this.roleService.permissionsGET("R",name)).pipe(
        // Take the returned value and return a new success action containing the todos
        map((PermissionI) => {
          return getPermissionSuccess({ PermissionI })
        }),
        // Or... if it errors return a new failure action containing the error
        catchError((error) => of(getRoleFailure({ error })))
      )
    )
  )
);

savePermissions$ = createEffect(() =>
  this.actions$.pipe(
    ofType(savePermissions),
    switchMap(({data}) =>
      this.roleService.permissionsPUT("R",data.name, data.permissions).pipe(map((res: any) => {
        // this.store.dispatch(getRoles());
        // this.alertService.showAlert('Success',  'Role added successfully', 'success')
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