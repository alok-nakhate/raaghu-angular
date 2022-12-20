import { createAction, props } from "@ngrx/store";
//import { UpdateLanguageTextInput } from "projects/libs/shared/src/lib/service-proxies";

export const getLanguageTexts = createAction(
    '[Language Text Page] Get Language Texts',
    (data)=>data
);
export const getLanguageTextSuccess = createAction(
    '[Language Text Page] Get Language Texts Success',
    props<{ languageText: any }>()
);

export const getLanguageTextFailure = createAction(
    '[Language Text Page] Get Language Texts Failure',
    props<{ error: string }>()
);

export const updateLanguageText = createAction(
    '[Language Text Page] Update Language Text',
    (languageText) => languageText
)