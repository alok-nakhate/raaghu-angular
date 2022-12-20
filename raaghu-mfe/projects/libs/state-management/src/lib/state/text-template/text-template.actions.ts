 import { createAction, props } from "@ngrx/store";
import { UpdateTemplateContentInput } from "projects/libs/shared/src/lib/service-proxies";

// export const getTemplateDefinition = createAction('[TextTemplate Page] Get All TextTemplate Definition');

// export const getTemplateDefinitionSuccess = createAction(
//     '[TextTemplate Page] Get All TextTemplate Definition Success',
//     props<{ allTextTemplate: any }>()
// );

// export const getTemplateDefinitionFailure = createAction(
//     '[TextTemplate Page] Get All TextTemplate Definition Failure',
//     props<{ error: string }>()
// );


// export const getTemplateContent = createAction('[TextTemplate Page] Get Api-Resource',
// (data:any) => ( data ));

// export const getTemplateContentSuccess = createAction(
//     '[TextTemplate Page] Get Template Content Success',
//     props<{ templateContent: any }>()
// );

// export const getTemplateContentFailure = createAction(
//     '[TextTemplate Page] Get Template Content Failure',
//     props<{ error: string }>()
// );

export const saveTextTemplateContent = createAction(
    '[TextTemplate Page] Save TextTemplate Content',
    (data:UpdateTemplateContentInput|undefined) => ( {data} )
    );

export const saveTextTemplateContentSuccess = createAction(
    '[TextTemplate Page] Save TextTemplate Content Success',
);

export const saveTextTemplateContentFailure = createAction(
    '[TextTemplate Page] Save TextTemplate Content Failure',
    props<{ error: string }>()
);

export const restoreToDefault = createAction(
    '[TextTemplate Page] Restore TextTemplate Content',
    (data) => (data)
);
export const restoreToDefaultSucess = createAction(
    '[TextTemplate Page] Restore TextTemplate Content Success',
);

