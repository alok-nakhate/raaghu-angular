import { Injectable } from '@angular/core';
import { AlertService, ServiceProxy } from '@libs/shared';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { from, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import {
  getOrganizationUnitTree,
  getOrganizationUnitTreeFailure,
  getOrganizationUnitTreeSuccess,
} from '../organization-unit/organization-unit.actions';
import {
  assignableRoles,
  assignableRolesFailure,
  assignableRolesSuccess,
  availbleOrganizationUnit,
  availbleOrganizationUnitFailure,
  availbleOrganizationUnitSuccess,
  changePasswordUser,
  deleteUser,
  getAllClaimTypes,
  getAllClaimTypesFailure,
  getAllClaimTypesSuccess,
  getClaimTypes,
  getClaimTypesFailure,
  getClaimTypesSuccess,
  getTemplateContent,
  getTemplateContentFailure,
  getTemplateContentSuccess,
  getTemplateDefinition,
  getTemplateDefinitionFailure,
  getTemplateDefinitionSuccess,
  getUsePermissionsFailure,
  getUserEditFailure,
  getUserFailure,
  getUserForEdit,
  getUserForEditSuccess,
  getUserPermission,
  getUserPermissionFilterList,
  getUserPermissionListSuccess,
  getUserPermissionSuccess,
  getUsers,
  getUserSuccess,
  saveClaims,
  saveUser,
  UpdateUserPermission,
} from './user.actions';

@Injectable()
export class UserEffects {
  textTemplateService: any;
  constructor(
    private actions$: Actions,
    private userService: ServiceProxy,
    private alertService: AlertService,
    private store: Store
  ) {}

  getTemplateDefinition$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTemplateDefinition),
      switchMap(() =>
        // Call the getTodos method, convert it to an observable
        from(this.userService.templateDefinitions(undefined,undefined,0,1000)).pipe(
          // Take the returned value and return a new success action containing the todos
          map((allTextTemplate) => {
            return getTemplateDefinitionSuccess({
              allTextTemplate
            });
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getTemplateDefinitionFailure({ error })))
        )
      )
    )
  );
  getTemplateContent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTemplateContent),
      switchMap(({data}) =>
        // Call the getTodos method, convert it to an observable
        from(this.userService.templateContentsGET(data.templateName,undefined)).pipe(
          // Take the returned value and return a new success action containing the todos
          map((templateContent) => {
            return getTemplateContentSuccess({
              templateContent
            });
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getTemplateContentFailure({ error })))
        )
      )
    )
  );
  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUsers),
      switchMap(() =>
        // Call the getTodos method, convert it to an observable
        from(
          this.userService.usersGET2(
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            0,
            1000
          )
        ).pipe(
          // Take the returned value and return a new success action containing the todos
          map((users: any) => {
            return getUserSuccess(users);
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getUserFailure({ error })))
        )
      )
    )
  );
    availableOrganizationUnitTree$ = createEffect(() =>
      this.actions$.pipe(
        ofType(availbleOrganizationUnit),
        switchMap(() =>
          // Call the getTodos method, convert it to an observable
          from(this.userService.availableOrganizationUnits()).pipe(
            // Take the returned value and return a new success action containing the todos
            map((availableOrgUnit) => {
              return availbleOrganizationUnitSuccess({
                availableOrgUnit
              });
            }),
            // Or... if it errors return a new failure action containing the error
            catchError((error) => of(availbleOrganizationUnitFailure({ error })))
          )
        )
      )
    );
    assignableRoles$ = createEffect(() =>
      this.actions$.pipe(
        ofType(assignableRoles),
        switchMap(() =>
          // Call the getTodos method, convert it to an observable
          from(this.userService.assignableRoles()).pipe(
            // Take the returned value and return a new success action containing the todos
            map((assignableRoles) => {
              return assignableRolesSuccess({
                assignableRoles
              });
            }),
            // Or... if it errors return a new failure action containing the error
            catchError((error) => of(assignableRolesFailure({ error })))
          )
        )
      )
    );
    saveUser$ = createEffect(() =>
      this.actions$.pipe(
        ofType(saveUser),
        switchMap((data) =>
          this.userService.usersPOST(data.user).pipe(map((res: any) => {
            this.store.dispatch(getUsers());
            this.alertService.showAlert('Success', 'User added successfully', 'success');

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
    getUserForEdit$ = createEffect(() =>
      this.actions$.pipe(
        ofType(getUserForEdit),
        switchMap(({ id }) =>
          // Call the getTodos method, convert it to an observable
          from(this.userService.usersGET(id)).pipe(
            // Take the returned value and return a new success action containing the todos
            map((UserEditI) => {
              return getUserForEditSuccess({ UserEditI: UserEditI })
            }),
            // Or... if it errors return a new failure action containing the error
            catchError((error) => of(getUserEditFailure({ error })))
          )
        )
      )
    );
    getUserPermission$ = createEffect(() =>
      this.actions$.pipe(
        ofType(getUserPermission),
        switchMap(({ id }) =>
          // Call the getTodos method, convert it to an observable
          from(this.userService.permissionsGET("T",id)).pipe(
            // Take the returned value and return a new success action containing the todos
            map((UserPermissionI) => {
              return getUserPermissionSuccess({ UserPermissionI })
            }),
            // Or... if it errors return a new failure action containing the error
            catchError((error) => of(getUsePermissionsFailure({ error })))
          )
        )
      )
    );
    UpdateUserPermission$ = createEffect(() =>
      this.actions$.pipe(
        ofType(UpdateUserPermission),
        switchMap((data) =>
          this.userService.permissionsPUT("T",undefined, data.Permissions).pipe(map((res: any) => {
            this.alertService.showAlert('Success', 'User permission updated successfully', 'success');

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

    deleteUser$ = createEffect(() =>
      this.actions$.pipe(
        ofType(deleteUser),
        switchMap(({ id }) =>
          this.userService.usersDELETE(id).pipe(map(() => {
            this.store.dispatch(getUsers());
            this.alertService.showAlert('Success', 'User deleted successfully', 'success');

          }
          ),
            catchError((error) => of())
          )
        )
      ),
      { dispatch: false }
    );

    getAllClaimTypes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllClaimTypes),
      switchMap(() =>
        // Call the getTodos method, convert it to an observable
        from(this.userService.allClaimTypes2()).pipe(
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
        from(this.userService.claimsAll2(id)).pipe(
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
        this.userService.claims2(data.id, data.permissions).pipe(map((res: any) => {
          this.store.dispatch(getUsers());
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

  changePassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(changePasswordUser),
      switchMap(({data}) =>
        this.userService.changePasswordPUT(data.id, data.newPassword).pipe(map((res: any) => {
          this.alertService.showAlert('Success',  'Password Changed Successfully', 'success')
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
  //   getUserPermissionFilter$ = createEffect(() =>
  //     this.actions$.pipe(
  //       ofType(getUserPermissionFilterList),
  //       switchMap(() =>
  //         // Call the getTodos method, convert it to an observable
  //         from(this.permissionService.getAllPermissions()).pipe(
  //           // Take the returned value and return a new success action containing the todos
  //           map((UserPermissionFilter) => {
  //             return getUserPermissionListSuccess({ UserPermissionFilterI: UserPermissionFilter })
  //           }),
  //           // Or... if it errors return a new failure action containing the error
  //           catchError((error) => of(getUsePermissionsFailure({ error })))
  //         )
  //       )
  //     )
  //   );
}

// export class TextTemplateEffects {
//   constructor(
//     private actions$: Actions,
//     private textTemplateService: ServiceProxy,
//     private alertService: AlertService,
//     private store: Store
//   ) { }
  

  
 

//         }