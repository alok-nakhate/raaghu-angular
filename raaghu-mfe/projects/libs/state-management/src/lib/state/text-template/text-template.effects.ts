import { Injectable } from '@angular/core';
import { AlertService, ServiceProxy } from '@libs/shared';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { from, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import {  restoreToDefault, restoreToDefaultSucess, saveTextTemplateContent, saveTextTemplateContentFailure, saveTextTemplateContentSuccess } from './text-template.actions';


@Injectable()
export class TextTemplateEffects {
  constructor(
    private actions$: Actions,
    private textTemplateService: ServiceProxy,
    private alertService: AlertService,
    private store: Store
  ) { }
  // getAllApiResources$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(getTemplateDefinition),
  //     switchMap(() =>
  //       // Call the getTodos method, convert it to an observable
  //       from(this.textTemplateService.templateDefinitions(undefined,undefined,0,1000)).pipe(
  //         // Take the returned value and return a new success action containing the todos
  //         map((allTextTemplate) => {
  //           return getTemplateDefinitionSuccess({
  //             allTextTemplate
  //           });
  //         }),
  //         // Or... if it errors return a new failure action containing the error
  //         catchError((error) => of(getTemplateDefinitionFailure({ error })))
  //       )
  //     )
  //   )
  // );

  // getTemplateContent$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(getTemplateContent),
  //     switchMap(({data}) =>
  //       // Call the getTodos method, convert it to an observable
  //       from(this.textTemplateService.templateContentsGET(data.name, data.cultureName)).pipe(
  //         // Take the returned value and return a new success action containing the todos
  //         map((templateContent) => {
  //           return getTemplateContentSuccess({
  //             templateContent
  //           });
  //         }),
  //         // Or... if it errors return a new failure action containing the error
  //         catchError((error) => of(getTemplateContentFailure({ error })))
  //       )
  //     )
  //   )
  // );
  saveTextTemplateContent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveTextTemplateContent),
      switchMap((data) =>
        // Call the getTodos method, convert it to an observable
        from(this.textTemplateService.templateContentsPUT(data.data)).pipe(
          // Take the returned value and return a new success action containing the todos
          map(() => {
            return saveTextTemplateContentSuccess();
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(saveTextTemplateContentFailure({ error })))
        )
      )
    )
  );

  
  restoreToDefault$ = createEffect(() =>
    this.actions$.pipe(
      ofType(restoreToDefault),
      mergeMap((data) =>
      this.textTemplateService.restoreToDefault(data).pipe(map((res: any) => {
        this.store.dispatch(restoreToDefaultSucess());
          this.alertService.showAlert('Success', 'Text Template Content Restored successfully','success' )
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