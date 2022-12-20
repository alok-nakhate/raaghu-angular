import { Injectable } from "@angular/core";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { AlertService } from "projects/libs/shared/src/lib/alert.service";
import { ServiceProxy } from "projects/libs/shared/src/lib/service-proxies";
import { from, of } from "rxjs";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";
import { deleteRole, getAllClaimTypes, getAllClaimTypesFailure, getAllClaimTypesSuccess, getClaimTypes, getClaimTypesFailure, getClaimTypesSuccess, getPermission, getPermissionSuccess, getRolByEdit, getRolByEditFailure, getRolByEditSuccess, getRoleFailure, getRoles, getRoleSuccess, saveClaims, savePermissions, saveRole, updateRole } from "./role.actions";


@Injectable()
export class RoleEffects {
  constructor(private actions$: Actions,
    private alertService: AlertService,
    private roleEditservice :ServiceProxy,
    private roleService: ServiceProxy, private store: Store) { }
  selectedPermissions = []
  getRoles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getRoles),
      switchMap(() =>
        // Call the getTodos method, convert it to an observable
        from(this.roleService.rolesGET3(undefined,undefined,0,1000)).pipe(
          // Take the returned value and return a new success action containing the todos
          map((roles) => {
            return getRoleSuccess({ roles })
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getRoleFailure({ error })))
        )
      )
    )
  );

  getAllClaimTypes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllClaimTypes),
      switchMap(() =>
        // Call the getTodos method, convert it to an observable
        from(this.roleService.allClaimTypes()).pipe(
          // Take the returned value and return a new success action containing the todos
          map((allClaimTypes) => {
            return getAllClaimTypesSuccess({ allClaimTypes })
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getAllClaimTypesFailure({ error })))
        )
      )
    )
  );

  getClaimTypes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getClaimTypes),
      switchMap(({id}) =>
        // Call the getTodos method, convert it to an observable
        from(this.roleService.claimsAll(id)).pipe(
          // Take the returned value and return a new success action containing the todos
          map((claimTypes) => {
            return getClaimTypesSuccess({ claimTypes })
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getClaimTypesFailure({ error })))
        )
      )
    )
  );
  saveClaims$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveClaims),
      switchMap(({data}) =>
        this.roleService.claims(data.id, data.claimData).pipe(map((res: any) => {
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

  
  

  getPermissions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPermission),
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

  saveRoles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveRole),
      switchMap((data) =>
        this.roleService.rolesPOST(data.role).pipe(map((res: any) => {
          this.store.dispatch(getRoles());
          this.alertService.showAlert('Success',  'Role added successfully', 'success')
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

  updateRole$ = createEffect(() =>
  this.actions$.pipe(
    ofType(updateRole),
    switchMap((data) =>
      this.roleService.rolesPUT2(data.role.id, data.role).pipe(map((res: any) => {
        this.store.dispatch(getRoles());
        this.alertService.showAlert('Success',  'Role updated successfully', 'success')
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
  
  deleteRole$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteRole),    
      switchMap(({ id }) =>
        this.roleService.rolesDELETE2(id).pipe(map(() => {
          this.store.dispatch(getRoles());
          this.alertService.showAlert('Success', 'Role deleted successfully', 'success');
        }
        ),
          catchError((error) => of())
        )
      )
    ),
    { dispatch: false }
  );

  getRoleByEdit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getRolByEdit),
      switchMap(({ id }) =>
        // Call the getTodos method, convert it to an observable
        from(this.roleEditservice.rolesGET2(id)).pipe(
          // Take the returned value and return a new success action containing the todos
          map((RoleEditI) => {
            return getRolByEditSuccess({ EditRoleSateI: RoleEditI })
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getRolByEditFailure({ error })))
        )
      )
    )
  );
}